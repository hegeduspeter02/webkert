import {inject, Injectable, OnInit} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {user} from "@angular/fire/auth";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements OnInit{

  loggedInUser?: firebase.default.User | null;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.isUserLoggedIn().subscribe(user => {
      this.loggedInUser = user;
    });
  }

  isLoggedIn() {
    return this.loggedInUser !== null;
  }

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.isLoggedIn()) {
      return true;
    }
    return false;
  }
}
