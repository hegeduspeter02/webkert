import {inject, Injectable, OnInit} from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import {user} from "@angular/fire/auth";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private authService: AuthService) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserLoggedIn();
  }
}
