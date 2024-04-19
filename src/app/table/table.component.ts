import {Component, inject, OnInit} from '@angular/core';
import Handsontable from "handsontable";
import {registerAllModules} from "handsontable/registry";
import {TableService} from "../Services/table.service";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {HotTableModule} from "@handsontable/angular";
import {DatePipe} from "@angular/common";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [HotTableModule],
  standalone: true,
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  tableService = inject(TableService);

  ngOnInit(): void {
    this.getData();
  }

  hotSettings: Handsontable.GridSettings = {
    rowHeaders: true,
    stretchH: 'all',
    licenseKey: 'non-commercial-and-evaluation',
    autoWrapRow: true,
    autoWrapCol: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
  };
  gyufacimkeData: Gyufacimke[];

  constructor() {
    this.gyufacimkeData = [];
  }

  addData() {
    let gyufacimke = new Gyufacimke(1, 10, 20, "2024.04.17", '20', 10, 10, "nev", ["jo", "rossz"], "10", "10", 2010, "comment", "id", "2024.04.17", "neve", 20, 30, "no", "megjegyzes", 40, "id");
    this.tableService.addGyufacimke(gyufacimke).subscribe({
      complete: () => console.log('Sikeres mentés'),
      error: err => console.error('Hiba történt', err)
    });
  }

  getData() {

    this.tableService.getAll().subscribe(gyufacimkek => {
      this.gyufacimkeData = gyufacimkek.map(gyufacimke => {
        return gyufacimke;
      });
    });
  }
}
