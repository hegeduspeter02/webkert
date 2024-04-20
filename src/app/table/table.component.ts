import {Component, inject, OnInit} from '@angular/core';
import Handsontable from "handsontable";
import {registerAllModules} from "handsontable/registry";
import {TableService} from "../Services/table.service";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {HotTableModule, HotTableRegisterer} from "@handsontable/angular";
import {CimkeTipus} from "../Entities/CimkeTipus";
import {Nyilvantartas} from "../Entities/Nyilvantartas";
import {Orszag} from "../Entities/Orszag";
import {NgIf} from "@angular/common";
import {CellChange, ChangeSource} from "handsontable/common";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  imports: [HotTableModule, NgIf],
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
    columnSorting: true,
    hiddenColumns: {
      columns: [],
      indicators: false
    },
    beforeRemoveRow: this.deleteTableData.bind(this),
    beforeCreateRow: this.addTableRow.bind(this),
    afterChange: this.updateTableData.bind(this),
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

  initializeTable() {
    let gyufacimke = new Gyufacimke(1, 100001, 0, '1970.01.01', 'Normál', 0, 0, '', '', 'Magyarország', '', 0, '', 'Gyűjtemény', '1970.01.01', '', 0, 0, '', '', 0, '');

    this.tableService.addGyufacimke(gyufacimke).subscribe({
      complete: () => console.log('initialize successful'),
      error: err => console.error('An error occurred', err)
    });
  }

  addTableRow(index: number, amount: number, source?: any) {
    let previousGyufacimke = this.gyufacimkeInputData[index];
    let gyufacimke = new Gyufacimke(previousGyufacimke.sorszam + 1, previousGyufacimke.digitalizalasi_azon + 1, 0, previousGyufacimke.nyilv_vetel_datum, previousGyufacimke.tipus, 0, 0, '', '', previousGyufacimke.orszag, '', previousGyufacimke.ev, '', previousGyufacimke.nyilvantartas, previousGyufacimke.beszerzesi_datum, previousGyufacimke.elado_neve, 0, 0, '', '', 0, '');

    this.tableService.addGyufacimke(gyufacimke).subscribe({
      complete: () => console.log('Insertion successful'),
      error: err => console.error('An error occurred', err)
    });
  }

  updateTableData(changes: CellChange[] | null, source: ChangeSource) {
    if (!changes) return;

    let typedChanges = changes as [number, keyof Gyufacimke, any, any][];

    typedChanges.forEach(([row, prop, oldVal, newVal]) => {
      if (oldVal !== newVal) { // Check if the value has changed
        let gyufacimkeToUpdate = this.gyufacimkeInputData[row];
        gyufacimkeToUpdate[prop] = newVal as never; // Update the property

        console.log(gyufacimkeToUpdate)

        // Update the entity in the database
        this.tableService.saveGyufacimke([gyufacimkeToUpdate]).subscribe({
          complete: () => console.log('Update successful'),
          error: err => console.error('An error occurred', err)
        });
      }
    });
  }


  deleteTableData(index: number, amount: number, physicalRows: number[], source?: any) {
    let gyufacimkesToDelete = physicalRows.map(row => {
      return this.gyufacimkeInputData[row];
    });

    this.tableService.deleteGyufacimke(gyufacimkesToDelete).subscribe({
      complete: () => console.log('Deletion successful'),
      error: err => console.error('An error occurred', err)
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
        return gyufacimke;
      });
      console.log(this.gyufacimkeInputData);
    });
  }
}
