"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const tinkoff_api_controller_1 = require("./tinkoff-api/tinkoff-api.controller");
const tinkoff_api_service_1 = require("./tinkoff-api/tinkoff-api.service");
const graphql_1 = require("@nestjs/graphql");
const apollo_1 = require("@nestjs/apollo");
const instrument_resolver_1 = require("./tinkoff-api/instrument.resolver");
let AppModule = class AppModule {
};
exports.AppModule = AppModule;
exports.AppModule = AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            graphql_1.GraphQLModule.forRoot({
                driver: apollo_1.ApolloDriver,
                autoSchemaFile: 'src/schema.gql',
                playground: true,
            }),
        ],
        controllers: [app_controller_1.AppController, tinkoff_api_controller_1.TinkoffApiController],
        providers: [app_service_1.AppService, tinkoff_api_service_1.TinkoffApiService, instrument_resolver_1.InstrumentResolver],
    })
], AppModule);
//# sourceMappingURL=app.module.js.map