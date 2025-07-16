import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultTableComponent } from './result-table.component';
import { AgGridModule } from 'ag-grid-angular';

@NgModule({
  declarations: [ResultTableComponent],
  imports: [CommonModule, AgGridModule],
  exports: [ResultTableComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ResultTableModule {}
