import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarketComponent } from './market.component';
import { RouterModule } from '@angular/router';
import { ResultTableModule } from './components/result-table/result-table.module';
import { InstrumentDetailsModule } from './components/instrument-details/instrument-details.module';
import { SharedModule } from '@shared/shared.module';

@NgModule({
  declarations: [MarketComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild([{ path: '', component: MarketComponent }]),
    ResultTableModule,
    InstrumentDetailsModule,
  ],
  exports: [MarketComponent],
})
export class MarketModule {}
