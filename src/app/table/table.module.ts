import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TableComponent} from "./table.component";
import {HotTableModule} from "@handsontable/angular";

@NgModule({
  declarations: [TableComponent],
  imports: [
    CommonModule,
    HotTableModule
  ],
  exports: [
    TableComponent
  ]
})
export class TableModule {
}
