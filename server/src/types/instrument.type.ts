import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Instrument {
  @Field()
  isin: string;

  @Field()
  figi: string;

  @Field()
  ticker: string;

  @Field()
  classCode: string;

  @Field()
  instrumentType: string;

  @Field()
  name: string;

  @Field()
  uid: string;

  @Field()
  positionUid: string;

  @Field(() => Int)
  instrumentKind: number;

  @Field()
  apiTradeAvailableFlag: boolean;

  @Field()
  forIisFlag: boolean;

  @Field({ nullable: true })
  first1minCandleDate?: string;

  @Field({ nullable: true })
  first1dayCandleDate?: string;

  @Field()
  forQualInvestorFlag: boolean;

  @Field()
  weekendFlag: boolean;

  @Field()
  blockedTcaFlag: boolean;

  @Field(() => Int)
  lot: number;
}