import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { ColDef, RowClickedEvent } from 'ag-grid-community';
import { colorSchemeDarkBlue, themeQuartz } from 'ag-grid-community';
import { AppStateService } from '@core/services/app-state.service';
import { Instrument } from '@shared/models/instrument.type';

@Component({
  selector: 'result-table',
  templateUrl: './result-table.component.html',
  styleUrls: ['./result-table.component.scss'],
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ResultTableComponent {
  @Input() rowData: Instrument[] = [];
  @Output() rowClick = new EventEmitter<any>();

  result: any[] = [];
  theme = themeQuartz.withPart(colorSchemeDarkBlue);

  constructor(private _appStateService: AppStateService) {}

  columnDefs: ColDef[] = [
    {
      headerName: 'Title',
      field: 'name',
      sortable: true,
      filter: true,
      flex: 2,
    },
    { headerName: 'Ticker', field: 'ticker', sortable: true, filter: true },
    { headerName: 'ISIN', field: 'isin', sortable: true, filter: true },
    {
      headerName: 'Тип инструмента',
      field: 'instrumentType',
      sortable: true,
      filter: true,
    },
    {
      headerName: 'Торговля API',
      field: 'apiTradeAvailableFlag',
      cellRenderer: (params: any) => (params.value ? '✔️' : '❌'),
      sortable: true,
      filter: true,
      cellStyle: { textAlign: 'center' },
    },
  ];

  onRowClick(event: RowClickedEvent) {
    const instrument = event.data as Instrument;
    this._appStateService.updateSelectedInstrument(instrument);
  }
}
