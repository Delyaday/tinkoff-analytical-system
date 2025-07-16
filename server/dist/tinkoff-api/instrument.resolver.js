"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const instrument_type_1 = require("../types/instrument.type");
const tinkoff_api_service_1 = require("./tinkoff-api.service");
const candle_type_1 = require("../types/candle.type");
const marketdata_1 = require("tinkoff-invest-api/dist/generated/marketdata");
let InstrumentResolver = class InstrumentResolver {
    _tinkoffApiService;
    constructor(_tinkoffApiService) {
        this._tinkoffApiService = _tinkoffApiService;
    }
    mapInstrumentShortToInstrument(data) {
        return {
            ...data,
            first1dayCandleDate: data.first1dayCandleDate?.toISOString() ?? '',
            first1minCandleDate: data.first1minCandleDate?.toISOString() ?? '',
        };
    }
    async instruments(query) {
        const result = await this._tinkoffApiService.findInstruments(query);
        return result.map(this.mapInstrumentShortToInstrument);
    }
    async instrumentByTicker(ticker) {
        const instruments = await this._tinkoffApiService.findInstruments(ticker);
        return instruments?.[0]
            ? this.mapInstrumentShortToInstrument(instruments[0])
            : null;
    }
    async candlesByFigi(figi, interval, fromTo) {
        return this._tinkoffApiService.getCandles(figi, interval, fromTo);
    }
};
exports.InstrumentResolver = InstrumentResolver;
__decorate([
    (0, graphql_1.Query)(() => [instrument_type_1.Instrument]),
    __param(0, (0, graphql_1.Args)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstrumentResolver.prototype, "instruments", null);
__decorate([
    (0, graphql_1.Query)(() => instrument_type_1.Instrument, { nullable: true }),
    __param(0, (0, graphql_1.Args)('ticker')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], InstrumentResolver.prototype, "instrumentByTicker", null);
__decorate([
    (0, graphql_1.Query)(() => [candle_type_1.Candle]),
    __param(0, (0, graphql_1.Args)('figi')),
    __param(1, (0, graphql_1.Args)('interval', { nullable: true })),
    __param(2, (0, graphql_1.Args)('fromTo', { nullable: true })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], InstrumentResolver.prototype, "candlesByFigi", null);
exports.InstrumentResolver = InstrumentResolver = __decorate([
    (0, graphql_1.Resolver)(() => instrument_type_1.Instrument),
    __metadata("design:paramtypes", [tinkoff_api_service_1.TinkoffApiService])
], InstrumentResolver);
//# sourceMappingURL=instrument.resolver.js.map