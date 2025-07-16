import { Component } from '@angular/core';
import { map, filter, distinctUntilChanged, takeUntil } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { Instrument } from '@shared/models/instrument.type';
import { AppStateService } from '@core/services/app-state.service';
import { TinkoffApiService } from '@core/services/tinkoff-api.service';

@Component({
  selector: 'market-component',
  templateUrl: './market.component.html',
  styleUrl: './market.component.scss',
  standalone: false,
})
export class MarketComponent {
  query = '';
  result: Instrument[] = [];
  error = '';
  selectedInstrument: Observable<Instrument> | undefined;

  private _destroy = new Subject<void>();

  constructor(
    private _appStateService: AppStateService,
    private _tinkoffApi: TinkoffApiService,
  ) {}

  ngOnInit() {
    this.selectedInstrument = this._appStateService._appState.pipe(
      map((state) => state.selectedInstrument),
    );

    this._appStateService._appState
      .pipe(
        map((state) => state.searchQuery),
        filter((query) => query.length >= 2),
        distinctUntilChanged(),
        takeUntil(this._destroy),
      )
      .subscribe((query) => {
        this.search(query);
      });
  }

  search(query: string) {
    this.error = '';
    this.result = [];

    this._tinkoffApi
      .find(query)
      .pipe(takeUntil(this._destroy))
      .subscribe({
        next: (data) => {
          this.result = data;
          this._appStateService.updateResult(this.result);
        },
        error: (err) => {
          this.error = err.message || 'Error occurred while searching';
        },
      });
  }

  onBackToSearch() {
    this._appStateService.setState({ selectedInstrument: null });
  }

  ngOnDestroy() {
    this._destroy.next();
    this._destroy.complete();
  }
}
