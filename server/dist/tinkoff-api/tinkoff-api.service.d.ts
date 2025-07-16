import { OnModuleInit, OnModuleDestroy } from '@nestjs/common';
import { InstrumentShort } from 'tinkoff-invest-api/cjs/generated/instruments';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata';
import { Candle } from '../types/candle.type';
export declare class TinkoffApiService implements OnModuleInit, OnModuleDestroy {
    private _api;
    onModuleInit(): void;
    onModuleDestroy(): void;
    findInstruments(query: string): Promise<InstrumentShort[]>;
    getCandles(figi: string, interval?: CandleInterval, fromTo?: string): Promise<Candle[]>;
}
