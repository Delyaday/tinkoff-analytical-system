import { Resolver, Query, Args } from '@nestjs/graphql';
import { Instrument } from '../types/instrument.type';
import { TinkoffApiService } from './tinkoff-api.service';
import { InstrumentShort } from 'tinkoff-invest-api/cjs/generated/instruments';
import { Candle } from '../types/candle.type';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata';

@Resolver(() => Instrument)
export class InstrumentResolver {
  constructor(private _tinkoffApiService: TinkoffApiService) {}

  private mapInstrumentShortToInstrument(data: InstrumentShort): Instrument {
    return {
      ...data,
      first1dayCandleDate: data.first1dayCandleDate?.toISOString() ?? '',
      first1minCandleDate: data.first1minCandleDate?.toISOString() ?? '',
    };
  }

  @Query(() => [Instrument])
  async instruments(@Args('query') query: string): Promise<Instrument[]> {
    const result: InstrumentShort[] =
      await this._tinkoffApiService.findInstruments(query);

    return result.map(this.mapInstrumentShortToInstrument);
  }

  @Query(() => Instrument, { nullable: true })
  async instrumentByTicker(
    @Args('ticker') ticker: string,
  ): Promise<Instrument | null> {
    const instruments = await this._tinkoffApiService.findInstruments(ticker);
    return instruments?.[0]
      ? this.mapInstrumentShortToInstrument(instruments[0])
      : null;
  }

  @Query(() => [Candle])
  async candlesByFigi(
    @Args('figi') figi: string,
    @Args('interval', { nullable: true }) interval?: CandleInterval,
    @Args('fromTo', { nullable: true }) fromTo?: string,
  ): Promise<Candle[]> {
    return this._tinkoffApiService.getCandles(figi, interval, fromTo);
  }
}
