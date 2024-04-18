import {Component, inject, OnInit} from '@angular/core';
import Handsontable from "handsontable";
import {registerAllModules} from "handsontable/registry";
import {TableService} from "../Services/table.service";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {HotTableModule} from "@handsontable/angular";
import {toArray} from "rxjs";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [HotTableModule],
  standalone: true,
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit{
  ngOnInit(): void {
      this.getData();
  }

  hotSettings: Handsontable.GridSettings = {
    colHeaders: ['Sorszám', 'Digitális azonosító', 'Adatbázis azonosító', 'Nyilvántartásba vétel dátum', 'Típus',
      'Méret x', 'Méret y', 'Megnevezés', 'Kulcsszavak', 'Ország', 'Helység',
      'Év', 'Megjegyzés', 'Nyilvántartás', 'Beszerzési dátum', 'Eladó/Partner neve', 'Bekerülési érték',
      'Járulékos költség', 'Tárolási információ', 'Vétel megjegyzés', 'Becsült érték', 'Eladás/Csere'],
    rowHeaders: true,
    stretchH: 'all',
    licenseKey: 'non-commercial-and-evaluation',
    fixedColumnsStart: 4,
    autoWrapRow: true,
    autoWrapCol: true,
    manualColumnFreeze: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
  };

  tableService = inject(TableService);

  addData(gyufacimke: Gyufacimke) {
    this.tableService.addGyufacimke(gyufacimke).subscribe({
      complete: () => console.log('Sikeres mentés'),
      error: err => console.error('Hiba történt', err)
    });
  }

  getData() {
    // let gyufacimke = new Gyufacimke(1, 10, 20, new Date(), '20', 10, 10, "nev", ["jo", "rossz"], "10", "10", 2010, "comment", "id", new Date(), "neve", 20, 30, "no", "megjegyzes", 40, "id");

    this.tableService.getAll().subscribe(gyufacimkek => {
      this.hotSettings.data = gyufacimkek.map(gyufacimke => {
        const values = Object.values(gyufacimke);
        return [...values, ...new Array(values.length)];
      });
      console.log(this.hotSettings.data);
      console.log(gyufacimkek);
    })
  }
}
