"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TinkoffApiService = void 0;
const common_1 = require("@nestjs/common");
const tinkoff_invest_api_1 = require("tinkoff-invest-api");
const marketdata_1 = require("tinkoff-invest-api/dist/generated/marketdata");
let TinkoffApiService = class TinkoffApiService {
    _api;
    onModuleInit() {
        this._api = new tinkoff_invest_api_1.TinkoffInvestApi({
            token: 't.r2A5kC9ISnc1Z2_rRQAxRasjQXbvRTDwuxQweehDf-O5LpXgRZpfAjoRsAL2xhIeCSYX_eXXvS_-oDMotiwjeQ',
        });
    }
    onModuleDestroy() { }
    async findInstruments(query) {
        const response = await this._api.instruments.findInstrument({ query });
        return response.instruments;
    }
    async getCandles(figi, interval = marketdata_1.CandleInterval.CANDLE_INTERVAL_HOUR, fromTo = '-1d') {
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
};
exports.TinkoffApiService = TinkoffApiService;
exports.TinkoffApiService = TinkoffApiService = __decorate([
    (0, common_1.Injectable)()
], TinkoffApiService);
//# sourceMappingURL=tinkoff-api.service.js.map