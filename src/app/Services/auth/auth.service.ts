import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import {map} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AngularFireAuth) { }

  login(email: string, password: string) {
    return this.auth.signInWithEmailAndPassword(email, password);
  }

  signup(email: string, password: string) {
    return this.auth.createUserWithEmailAndPassword(email, password);
  }

  getUser() {
    return this.auth.user;
  }

  isUserLoggedIn() {
    return this.auth.authState.pipe(map(user => user !== null));
  }

  logout() {
    return this.auth.signOut();
  }

}
