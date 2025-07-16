import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges,
  OnInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
} from '@angular/core';
import { Instrument } from '@shared/models/instrument.type';
import * as Highcharts from 'highcharts';
import { TinkoffApiService } from '@core/services/tinkoff-api.service';
import { ChartConstructorType } from 'highcharts-angular';

@Component({
  selector: 'instrument-details',
  templateUrl: './instrument-details.component.html',
  styleUrl: './instrument-details.component.scss',
  standalone: false,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InstrumentDetailsComponent implements OnChanges, OnInit {
  @Input() instrument: Instrument | null = null;
  @Output() back = new EventEmitter<void>();

  Highcharts: typeof Highcharts = Highcharts;
  chartConstructor: ChartConstructorType = 'chart';
  chartOptions!: Highcharts.Options;
  hasData: boolean = false;

  constructor(
    private _tinkoffApiService: TinkoffApiService,
    private _cdr: ChangeDetectorRef,
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.instrument?.figi) {
      this._tinkoffApiService
        .getCandles(this.instrument.figi)
        .subscribe((candles) => {
          this.buildChart(candles);
          this._cdr.markForCheck();
        });
    }
  }

  ngOnInit(): void {}

  buildChart(candles: any[]) {
    if (!candles?.length) {
      this.hasData = false;
      return;
    }

    const seriesData = candles.map((c) => [
      new Date(c.time).getTime(),
      c.close,
    ]);

    this.hasData = !!seriesData.length;

    console.log(candles, seriesData);

    const name = this.instrument?.name ?? 'No name';
    const ticker = this.instrument?.ticker ?? '';

    this.chartOptions = {
      chart: {
        type: 'line',
        backgroundColor: '#1e1e1e',
        borderWidth: 2,
        borderColor: '',
      },
      title: { text: `${name} - График`, style: { color: 'white' } },
      xAxis: {
        type: 'datetime',
        labels: {
          style: {
            color: '#aaa',
          },
        },
      },
      yAxis: {
        title: {
          text: 'Price',
          style: {
            color: '#aaa',
          },
        },
        labels: {
          style: {
            color: '#aaa',
          },
        },
      },
      series: [
        {
          type: 'line',
          name: ticker,
          data: seriesData,
        },
      ],
    };
  }
}
