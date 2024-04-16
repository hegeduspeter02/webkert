import { Component } from '@angular/core';
import Handsontable from "handsontable";
import {HotTableModule} from "@handsontable/angular";
import {registerAllModules} from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    HotTableModule
  ],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  hotSettings: Handsontable.GridSettings = {
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    height: 400,
    licenseKey: 'non-commercial-and-evaluation'
  };
}
