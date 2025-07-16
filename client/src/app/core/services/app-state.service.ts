import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Instrument } from '../../shared/models/instrument.type';

export interface AppState {
  searchQuery: string;
  searchResults?: any[];
  ticker: string;
  isin: string;
  selectedInstrument?: any;
}

@Injectable({
  providedIn: 'root',
})
export class AppStateService {
  private _state: AppState = {
    searchQuery: '',
    searchResults: [],
    ticker: '',
    isin: '',
  };

  private _stateSubject = new BehaviorSubject<AppState>(this._state);
  public _appState = this._stateSubject.asObservable();

  constructor() {}

  getState(): Observable<AppState> {
    return this._appState;
  }

  setState(newState: Partial<AppState>): void {
    this._state = { ...this._state, ...newState };
    this._stateSubject.next(this._state);
  }

  updateResult(result: any[]): void {
    this._state.searchResults = result;
    this._stateSubject.next(this._state);
  }

  updateSearchQuery(query: string): void {
    this._state.searchQuery = query;
    this._stateSubject.next(this._state);
  }
  updateTicker(ticker: string): void {
    this._state.ticker = ticker;
    this._stateSubject.next(this._state);
  }
  updateIsin(isin: string): void {
    this._state.isin = isin;
    this._stateSubject.next(this._state);
  }

  updateSelectedInstrument(instrument: Instrument) {
    this._state.selectedInstrument = instrument;
    this._stateSubject.next(this._state);
  }

  clearSelectedInstrument() {
    this._state.selectedInstrument = undefined;
    this._stateSubject.next(this._state);
  }
}
