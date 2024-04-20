import { Component } from '@angular/core';
import {RouterLink, RouterLinkActive} from "@angular/router";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {MatIcon} from "@angular/material/icon";
import {MatButton, MatIconButton} from "@angular/material/button";
import {MatSidenav, MatSidenavContainer} from "@angular/material/sidenav";
import {map, Observable, shareReplay} from "rxjs";
import {BreakpointObserver, Breakpoints} from "@angular/cdk/layout";
import {AsyncPipe} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    MatIcon,
    MatIconButton,
    MatToolbarRow,
    MatButton,
    MatSidenavContainer,
    MatSidenav
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {

}
