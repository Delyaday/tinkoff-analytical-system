import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstrumentDetailsComponent } from './instrument-details.component';
import { HighchartsChartComponent } from 'highcharts-angular';

@NgModule({
  declarations: [InstrumentDetailsComponent],
  imports: [CommonModule, HighchartsChartComponent],
  exports: [InstrumentDetailsComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class InstrumentDetailsModule {}
