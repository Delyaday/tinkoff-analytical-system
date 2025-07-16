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
Object.defineProperty(exports, "__esModule", { value: true });
exports.InstrumentDetails = void 0;
const graphql_1 = require("@nestjs/graphql");
const instrument_type_1 = require("./instrument.type");
const candle_type_1 = require("./candle.type");
let InstrumentDetails = class InstrumentDetails {
    instrument;
    candles;
};
exports.InstrumentDetails = InstrumentDetails;
__decorate([
    (0, graphql_1.Field)(() => instrument_type_1.Instrument),
    __metadata("design:type", instrument_type_1.Instrument)
], InstrumentDetails.prototype, "instrument", void 0);
__decorate([
    (0, graphql_1.Field)(() => [candle_type_1.Candle]),
    __metadata("design:type", Array)
], InstrumentDetails.prototype, "candles", void 0);
exports.InstrumentDetails = InstrumentDetails = __decorate([
    (0, graphql_1.ObjectType)()
], InstrumentDetails);
//# sourceMappingURL=instrument-details.type.js.map