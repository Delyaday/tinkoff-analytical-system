import { Instrument } from '../types/instrument.type';
import { TinkoffApiService } from './tinkoff-api.service';
import { Candle } from '../types/candle.type';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata';
export declare class InstrumentResolver {
    private _tinkoffApiService;
    constructor(_tinkoffApiService: TinkoffApiService);
    private mapInstrumentShortToInstrument;
    instruments(query: string): Promise<Instrument[]>;
    instrumentByTicker(ticker: string): Promise<Instrument | null>;
    candlesByFigi(figi: string, interval?: CandleInterval, fromTo?: string): Promise<Candle[]>;
}
