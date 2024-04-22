import {Component, inject} from '@angular/core';
import { MatCardContent, MatCardHeader, MatCardModule, MatCardTitle} from "@angular/material/card";
import {MatInputModule} from "@angular/material/input";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {AuthService} from "../Services/auth/auth.service";
import {CommonModule} from "@angular/common";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    MatCardModule,
    MatButtonModule,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatInputModule,
    ReactiveFormsModule,
    MatIconModule,
    CommonModule,
  ],
  standalone: true,
  styleUrl: './login.component.css'
})
export class LoginComponent {
  authService = inject(AuthService);

  loginForm = this.formBuilder.group({
    username: ['', Validators.required],
    password: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  loginUser() {
    if (this.loginForm.valid) {
      console.log(this.loginForm.value)
    }
    this.authService.login(String(this.loginForm.value.username), String(this.loginForm.value.password)).then(() => { console.log('login successful') });
  }
}
