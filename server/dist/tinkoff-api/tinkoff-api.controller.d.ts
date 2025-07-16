import { TinkoffApiService } from './tinkoff-api.service';
export declare class TinkoffApiController {
    private readonly tinkoffApiService;
    constructor(tinkoffApiService: TinkoffApiService);
    find(query: string): Promise<import("tinkoff-invest-api/cjs/generated/instruments").InstrumentShort[]>;
    getCandles(instrumentId: string, interval: number, fromTo?: string): Promise<import("../types/candle.type").Candle[]>;
}
