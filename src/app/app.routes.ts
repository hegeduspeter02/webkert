import { Routes } from '@angular/router';
import { AboutComponent} from "./about/about.component";
import {TableComponent} from "./table/table.component";

export const routes: Routes = [
  { path: 'about', component: AboutComponent },
  { path: '', component: TableComponent },
];
