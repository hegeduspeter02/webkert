import {Component, inject, OnInit} from '@angular/core';
import Handsontable from "handsontable";
import {registerAllModules} from "handsontable/registry";
import {TableService} from "../Services/table.service";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {HotTableModule} from "@handsontable/angular";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [HotTableModule],
  standalone: true,
  styleUrl: './table.component.css'
})
export class TableComponent{
  hotSettings: Handsontable.GridSettings = {
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    licenseKey: 'non-commercial-and-evaluation'
  };

  tableService = inject(TableService);

  getData(){
    let gyufacimke = new Gyufacimke(1, 10, 20, new Date(), '20', 10, 10, "nev", ["jo", "rossz"], "10", "10", 2010, "comment", "id", new Date(), "neve", 20, 30, "no", "megjegyzes", 40, "id");

    // this.tableService.getOrszagok().subscribe(orszagok => {
    //   console.log(orszagok);
    // })

    this.tableService.addGyufacimke(gyufacimke).subscribe({
      complete: () => console.log('Sikeres mentés'),
      error: err => console.error('Hiba történt', err)
    });
  }
}
