import { Routes } from '@angular/router';
import { AboutComponent} from "./about/about.component";
import {TableComponent} from "./table/table.component";
import {EladasCsereComponent} from "./eladas-csere/eladas-csere.component";
import {LoginComponent} from "./login/login.component";
import {AuthGuard} from "./Services/guard/auth.guard";
import {LogoutComponent} from "./logout/logout.component";

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LogoutComponent },
  { path: 'about', component: AboutComponent },
  { path: 'eladas-csere', component: EladasCsereComponent, canActivate: [AuthGuard]},
  { path: '', component: TableComponent, canActivate: [AuthGuard] },
];
