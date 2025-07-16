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
exports.TinkoffApiController = void 0;
const common_1 = require("@nestjs/common");
const tinkoff_api_service_1 = require("./tinkoff-api.service");
let TinkoffApiController = class TinkoffApiController {
    tinkoffApiService;
    constructor(tinkoffApiService) {
        this.tinkoffApiService = tinkoffApiService;
    }
    async find(query) {
        return await this.tinkoffApiService.findInstruments(query);
    }
    async getCandles(instrumentId, interval, fromTo = '-1d') {
        return this.tinkoffApiService.getCandles(instrumentId, interval, fromTo);
    }
};
exports.TinkoffApiController = TinkoffApiController;
__decorate([
    (0, common_1.Get)('find'),
    __param(0, (0, common_1.Query)('query')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], TinkoffApiController.prototype, "find", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('instrumentId')),
    __param(1, (0, common_1.Query)('interval')),
    __param(2, (0, common_1.Query)('fromTo')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, Number, String]),
    __metadata("design:returntype", Promise)
], TinkoffApiController.prototype, "getCandles", null);
exports.TinkoffApiController = TinkoffApiController = __decorate([
    (0, common_1.Controller)('api/tinkoffApi'),
    __metadata("design:paramtypes", [tinkoff_api_service_1.TinkoffApiService])
], TinkoffApiController);
//# sourceMappingURL=tinkoff-api.controller.js.map