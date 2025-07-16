import { Controller, Get, Query } from '@nestjs/common';
import { TinkoffApiService } from './tinkoff-api.service';
import { CandleInterval } from 'tinkoff-invest-api/dist/generated/marketdata.js';

@Controller('api/tinkoffApi')
export class TinkoffApiController {
  constructor(private readonly tinkoffApiService: TinkoffApiService) {}

  @Get('find')
  async find(@Query('query') query: string) {
    return await this.tinkoffApiService.findInstruments(query);
  }

  @Get()
  async getCandles(
    @Query('instrumentId') instrumentId: string,
    @Query('interval') interval: number,
    @Query('fromTo') fromTo:string = '-1d',
  ) {
    return this.tinkoffApiService.getCandles(instrumentId, interval, fromTo);
  }
}
