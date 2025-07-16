export interface Instrument {
  isin: string;
  figi: string;
  ticker: string;
  classCode: string;
  instrumentType: string;
  /** Название инструмента. */
  name: string;
  /** Уникальный идентификатор инструмента. */
  uid: string;
  /** Уникальный идентификатор позиции инструмента. */
  positionUid: string;
  /** Тип инструмента. */
  instrumentKind: string;
  /** Возможность торговать инструментом через API. */
  apiTradeAvailableFlag: boolean;
  /** Признак доступности для ИИС. */
  forIisFlag: boolean;
  /** Дата первой минутной свечи. */
  first1minCandleDate?: Date | undefined;
  /** Дата первой дневной свечи. */
  first1dayCandleDate?: Date | undefined;
  /** Флаг, отображающий доступность торговли инструментом только для квалифицированных инвесторов. */
  forQualInvestorFlag: boolean;
  /** Флаг, отображающий доступность торговли инструментом по выходным. */
  weekendFlag: boolean;
  /** Флаг заблокированного ТКС. */
  blockedTcaFlag: boolean;
  /** Количество бумаг в лоте. */
  lot: number;
}