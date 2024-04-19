import {Component, inject, OnInit} from '@angular/core';
import Handsontable from "handsontable";
import {registerAllModules} from "handsontable/registry";
import {TableService} from "../Services/table.service";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {HotTableModule} from "@handsontable/angular";
import {CimkeTipus} from "../Entities/CimkeTipus";
import {Nyilvantartas} from "../Entities/Nyilvantartas";
import {Orszag} from "../Entities/Orszag";
import {HotTableRegisterer} from "@handsontable/angular";

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
  private hotRegisterer = new HotTableRegisterer();
  tableId = 'hotInstance';

  ngOnInit(): void {
    this.getCimkeTipusok();
    this.getNyilvantartasok();
    this.getOrszagok();
    this.getGyufacimke();
  }

  hotSettings: Handsontable.GridSettings = {
    rowHeaders: true,
    licenseKey: 'non-commercial-and-evaluation',
    fixedColumnsStart: 4,
    autoWrapRow: true,
    autoWrapCol: true,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
    hiddenColumns: {
      columns: [],
      indicators: false
    },
  };
  gyufacimkeInputData: Gyufacimke[];
  cimkeTipusok: CimkeTipus[];
  nyilvantartasok: Nyilvantartas[];
  orszagok: Orszag[];
  gyufacimkeOutputData: any[];

  constructor() {
    this.gyufacimkeInputData = [];
    this.cimkeTipusok = [];
    this.nyilvantartasok = [];
    this.orszagok = [];
    this.gyufacimkeOutputData = [];
  }

  getTableData(){
    this.gyufacimkeOutputData = this.hotRegisterer.getInstance(this.tableId).getData();

    let gyufacimkeOutputObjects = this.gyufacimkeOutputData.map(gyufacimke => {
      return new Gyufacimke(
        gyufacimke[0],
        gyufacimke[1],
        gyufacimke[2],
        gyufacimke[3],
        gyufacimke[4],
        gyufacimke[5],
        gyufacimke[6],
        gyufacimke[7],
        gyufacimke[8],
        gyufacimke[9],
        gyufacimke[10],
        gyufacimke[11],
        gyufacimke[12],
        gyufacimke[13],
        gyufacimke[14],
        gyufacimke[15],
        gyufacimke[16],
        gyufacimke[17],
        gyufacimke[18],
        gyufacimke[19],
        gyufacimke[20],
        gyufacimke[21],
        gyufacimke[22]
      )
    });

    this.tableService.saveGyufacimke(gyufacimkeOutputObjects).subscribe({
      complete: () => console.log('Sikeres mentés'),
      error: err => console.error('Hiba történt', err)
    });
    console.log(gyufacimkeOutputObjects);
  }

  addData() {
    let gyufacimke = new Gyufacimke(1, 10, 20, "2024.04.17", "cimke_tipusok/P", 10, 10, "nev", "jo, rossz", "orszagok/A", "10", 2010, "comment", "nyilvantartasok/GY", "2024.04.17", "neve", 20, 30, "no", "megjegyzes", 40, "id");
    this.tableService.addGyufacimke(gyufacimke).subscribe({
      complete: () => console.log('Sikeres mentés'),
      error: err => console.error('Hiba történt', err)
    });
  }

  getCimkeTipusok() {
    this.tableService.getAllCimkeTipus().subscribe(cimke_tipusok => {
      this.cimkeTipusok = cimke_tipusok.map(cimke_tipus => {
        return cimke_tipus;
      });
    });
  }

  getCimkeTipusNevek(): string[] {
    return this.cimkeTipusok.map(cimkeTipus => cimkeTipus.nev);
  }

  getNyilvantartasok() {
    this.tableService.getAllNyilvantartas().subscribe(nyilvantartas_tipusok => {
      this.nyilvantartasok = nyilvantartas_tipusok.map(nyilvantartas_tipus => {
        return nyilvantartas_tipus;
      });
    });
  }

  getNyilvantartasNevek(): string[] {
    return this.nyilvantartasok.map(nyilvantartas => nyilvantartas.nev);
  }
  getOrszagok() {
    this.tableService.getAllOrszag().subscribe(orszagok => {
      this.orszagok = orszagok.map(orszag => {
        return orszag;
      });
    });
  }

  getOrszagNevek(): string[] {
    return this.orszagok.map(orszag => orszag.nev);
  }

  getGyufacimke() {
    this.tableService.getAllGyufacimke().subscribe(gyufacimkek => {
      this.gyufacimkeInputData = gyufacimkek.map(gyufacimke => {
        this.cimkeTipusok.forEach(cimkeTipus => {
          if(gyufacimke.tipus === `cimke_tipusok/${cimkeTipus.rovidites}`) {
            gyufacimke.tipus = cimkeTipus.nev;
          }
        });

        this.nyilvantartasok.forEach(nyilvantartas => {
          if(gyufacimke.nyilvantartas === `nyilvantartasok/${nyilvantartas.rovidites}`) {
            gyufacimke.nyilvantartas = nyilvantartas.nev;
          }
        });

        this.orszagok.forEach(orszag => {
          if(gyufacimke.orszag === `orszagok/${orszag.rovidites}`) {
            gyufacimke.orszag = orszag.nev;
          }
        });
        return gyufacimke;
      });
      console.log(this.gyufacimkeInputData);
    });
  }
}
