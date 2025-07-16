import { ObjectType, Field } from '@nestjs/graphql';
import { Instrument } from './instrument.type';
import { Candle } from './candle.type';

@ObjectType()
export class InstrumentDetails {
  @Field(() => Instrument)
  instrument: Instrument;

  @Field(() => [Candle])
  candles: Candle[];
}