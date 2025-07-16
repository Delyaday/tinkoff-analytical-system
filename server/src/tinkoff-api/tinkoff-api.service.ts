import { Injectable, OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { TinkoffInvestApi } from 'tinkoff-invest-api';
import { InstrumentShort } from 'tinkoff-invest-api/cjs/generated/instruments';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata';
import { Candle } from '../types/candle.type';

@Injectable()
export class TinkoffApiService implements OnModuleInit, OnModuleDestroy {
  private _api: TinkoffInvestApi;

  onModuleInit() {
    this._api = new TinkoffInvestApi({
        // enter your token here
      token:
        '',
    });
  }

  onModuleDestroy() {}

  async findInstruments(query: string): Promise<InstrumentShort[]> {
    const response = await this._api.instruments.findInstrument({ query });

    return response.instruments;
  }

  async getCandles(
    figi: string,
    interval: CandleInterval = CandleInterval.CANDLE_INTERVAL_HOUR,
    fromTo: string = '-1d',
  ): Promise<Candle[]> {
    const { candles } = await this._api.marketdata.getCandles({
      instrumentId: figi,
      interval,
      ...this._api.helpers.fromTo(fromTo),
    });

    return candles.map((c) => ({
      time: c.time?.toISOString() ?? '',
      open: (c.open?.units ?? 0) + (c.open?.nano ?? 0) / 1e9,
      close: (c.close?.units ?? 0) + (c.close?.nano ?? 0) / 1e9,
      high: (c.high?.units ?? 0) + (c.high?.nano ?? 0) / 1e9,
      low: (c.low?.units ?? 0) + (c.low?.nano ?? 0) / 1e9,
      volume: c.volume ?? 0,
    }));
  }
}
