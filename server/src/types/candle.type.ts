import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Candle {
  @Field()
  time: string;

  @Field()
  open: number;

  @Field()
  high: number;

  @Field()
  low: number;

  @Field()
  close: number;

  @Field()
  volume: number;
}