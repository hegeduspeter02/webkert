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
import Core from "handsontable/core";
import {CellProperties} from "handsontable/settings";

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
  gyufacimkeInputData: Gyufacimke[];
  cimkeTipusok: CimkeTipus[];
  nyilvantartasok: Nyilvantartas[];
  orszagok: Orszag[];
  gyufacimkeOutputData: any[];

  hotSettings: Handsontable.GridSettings = {
    rowHeaders: true,
    licenseKey: 'non-commercial-and-evaluation',
    fixedColumnsStart: 4,
    autoWrapRow: true,
    autoWrapCol: false,
    contextMenu: true,
    filters: true,
    dropdownMenu: true,
    columnSorting: true,
    hiddenColumns: {
      columns: [23],
      indicators: false
    },
    beforeRemoveRow: this.deleteTableData.bind(this),
    beforeCreateRow: this.addTableRow.bind(this),
    afterChange: this.updateTableData.bind(this),
    colWidths: [110, 200, 200, 190, 300, 100, 100, 100, 140, 130, 150, 150, 75, 200, 150, 180, 200, 170, 180, 200, 180, 150, 140]
  };

  ngOnInit(): void {
    this.getCimkeTipusok();
    this.getNyilvantartasok();
    this.getOrszagok();
    this.getGyufacimke();
  }

  constructor() {
    this.gyufacimkeInputData = [];
    this.cimkeTipusok = [];
    this.nyilvantartasok = [];
    this.orszagok = [];
    this.gyufacimkeOutputData = [];
    this.imageRenderer.bind(this);
  }

  initializeTable() {
    let gyufacimke = new Gyufacimke(1, 100001, 0, '1970.01.01', 'Normál', 0, 0, '', '', 'Magyarország', '', 0, '', 'Gyűjtemény', '1970.01.01', '', 0, 0, '', '', 0, '');

    this.tableService.addGyufacimke(gyufacimke).subscribe();
  }

  addTableRow(index: number, amount: number, source?: any) {
    let previousGyufacimke = this.gyufacimkeInputData[index];
    let gyufacimke = new Gyufacimke(previousGyufacimke.sorszam + 1, Number(previousGyufacimke.digitalizalasi_azon) + 1, 0, previousGyufacimke.nyilv_vetel_datum, previousGyufacimke.tipus, 0, 0, '', '', previousGyufacimke.orszag, '', previousGyufacimke.ev, '', previousGyufacimke.nyilvantartas, previousGyufacimke.beszerzesi_datum, previousGyufacimke.elado_neve, 0, 0, '', '', 0, '');
    this.tableService.addGyufacimke(gyufacimke).subscribe();
  }

  updateTableData(changes: CellChange[] | null, source: ChangeSource) {
    if (!changes) return;

    let typedChanges = changes as [number, keyof Gyufacimke, any, any][];

    typedChanges.forEach(([row, prop, oldVal, newVal]) => {
      if (oldVal !== newVal) { // Check if the value has changed
        let gyufacimkeToUpdate = this.gyufacimkeInputData[row];
        gyufacimkeToUpdate[prop] = newVal as never; // Update the property

        this.tableService.saveGyufacimke([gyufacimkeToUpdate]).subscribe();
      }
    });
  }

  deleteTableData(index: number, amount: number, physicalRows: number[], source?: any) {
    let gyufacimkesToDelete = physicalRows.map(row => {
      return this.gyufacimkeInputData[row];
    });

    this.tableService.deleteGyufacimke(gyufacimkesToDelete).subscribe();
  }

  imageRenderer(instance: Core, TD: HTMLTableCellElement, row:number, column:number, prop:string|number, value:any, cellProperties:CellProperties) {
    const args: [Core, HTMLTableCellElement, number, number, string | number, any, CellProperties] = [instance, TD, row, column, prop, value, cellProperties];
    Handsontable.renderers.TextRenderer.apply(this, args);

    let meret_x = instance.getDataAtCell(row, 6);

    TD.innerHTML = '<img src="../../assets/images/'+ value +'.jpg" style="max-width:'+ meret_x*2.3 +'px" alt="kep" onClick="console.log(\'sa\')">';
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
    });
  }
}
