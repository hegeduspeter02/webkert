import { Component } from '@angular/core';
import Handsontable from "handsontable";
import {registerAllModules} from "handsontable/registry";
import {TableService} from "../Services/table.service";
import {Gyufacimke} from "../Entities/Gyufacimke";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  hotSettings: Handsontable.GridSettings = {
    colHeaders: true,
    rowHeaders: true,
    stretchH: 'all',
    licenseKey: 'non-commercial-and-evaluation'
  };

  constructor(private tableService: TableService) {
  }

  getData(){
    let gyufacimke = new Gyufacimke(1, 10, 20, new Date(), '20', 10, 10, "nev", ["jo", "rossz"], "10", "10", 2010, "comment", "id", new Date(), "neve", 20, 30, "no", "megjegyzes", 40, "id");

    this.tableService.insertData(gyufacimke)
      .then(docRef => {
        console.log(`Document written with ID: ${docRef.id}`);
      })
      .catch(error => {
        console.error(`Error adding document: ${error}`);
      });
  }
}
