import { Injectable } from '@nestjs/common';
import { TinkoffInvestApi } from 'tinkoff-invest-api';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello, World!';
  }
}
