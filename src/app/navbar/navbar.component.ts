import {Component, OnInit} from '@angular/core';
import {Router, RouterLink, RouterLinkActive} from "@angular/router";
import {MatToolbar, MatToolbarRow} from "@angular/material/toolbar";
import {AuthService} from "../Services/auth/auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatToolbar,
    MatToolbarRow,
    NgIf,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit{
  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.authService.getUser().subscribe(user => {
      this.loggedInUser = user;
      localStorage.setItem('user', JSON.stringify(user));
    }, error => {
      localStorage.setItem('user', JSON.stringify('null'));
    });
  }

  isLoggedIn() {
    return this.loggedInUser !== null;
  }

  logout() {
    this.authService.logout().then(() => {
      this.router.navigate(['/login']);
    });
  }
}
