import {inject, Injectable, OnInit} from '@angular/core';
import {ActivatedRouteSnapshot, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import {map, Observable} from 'rxjs';
import {user} from "@angular/fire/auth";
import {AuthService} from "../auth/auth.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard{

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
      route: ActivatedRouteSnapshot,
      state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return this.authService.isUserLoggedIn().pipe(
        map(isLoggedIn => {
          if (!isLoggedIn) {
            this.router.navigateByUrl('/login');
          }
          return isLoggedIn;
        })
    );
  }
}
