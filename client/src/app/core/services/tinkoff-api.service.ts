import { Injectable } from '@angular/core';
import { Observable, throwError, map } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Apollo, gql } from 'apollo-angular';
import { Instrument } from '../../shared/models/instrument.type';

@Injectable({
  providedIn: 'root',
})
export class TinkoffApiService {
  constructor(private _apollo: Apollo) {}

  find(query: string): Observable<Instrument[]> {
    return this._apollo
      .query<{ instruments: Instrument[] }>({
        query: gql`
          query ($query: String!) {
            instruments(query: $query) {
              name
              ticker
              figi
              isin
              instrumentType
              instrumentKind
              classCode
              lot
              apiTradeAvailableFlag
              forIisFlag
              weekendFlag
              first1dayCandleDate
              first1minCandleDate
            }
          }
        `,
        variables: { query },
        fetchPolicy: 'no-cache',
      })
      .pipe(map((result) => result.data.instruments));
  }

  getByTicker(ticker: string): Observable<Instrument | null> {
    return this._apollo
      .query<{ instrumentByTicker: Instrument | null }>({
        query: gql`
          query ($ticker: String!) {
            instrumentByTicker(ticker: $ticker) {
              name
              ticker
              figi
              isin
              instrumentType
              instrumentKind
              classCode
              lot
              apiTradeAvailableFlag
              forIisFlag
              weekendFlag
              first1dayCandleDate
              first1minCandleDate
            }
          }
        `,
        variables: { ticker },
        fetchPolicy: 'no-cache',
      })
      .pipe(map((result) => result.data.instrumentByTicker));
  }

  getCandles(figi: string): Observable<any[]> {
    return this._apollo
      .query<{ candlesByFigi: any[] }>({
        query: gql`
          query ($figi: String!) {
            candlesByFigi(figi: $figi) {
              time
              open
              close
              high
              low
              volume
            }
          }
        `,
        variables: { figi },
        fetchPolicy: 'no-cache',
      })
      .pipe(map((result) => result.data.candlesByFigi));
  }
}
