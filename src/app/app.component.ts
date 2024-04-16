import {Component} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HotTableModule} from "@handsontable/angular";
import {registerAllModules} from "handsontable/registry";

// register Handsontable's modules
registerAllModules();

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    HotTableModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {

}
