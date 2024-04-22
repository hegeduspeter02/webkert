import { Routes } from '@angular/router';
import { AboutComponent} from "./about/about.component";
import {TableComponent} from "./table/table.component";
import {EladasCsereComponent} from "./eladas-csere/eladas-csere.component";
import {LoginComponent} from "./login/login.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'about', component: AboutComponent },
  { path: 'eladas-csere', component: EladasCsereComponent },
  { path: '', component: TableComponent },
];
