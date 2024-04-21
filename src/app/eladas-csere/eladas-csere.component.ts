import { Component } from '@angular/core';
import { MatFormFieldModule, MatHint, MatLabel} from "@angular/material/form-field";
import { MatInputModule} from "@angular/material/input";
import { MatIconModule} from "@angular/material/icon";
import {
  MatDatepickerModule,
} from "@angular/material/datepicker";
import {provideNativeDateAdapter} from "@angular/material/core";
import {ReactiveFormsModule, Validators} from "@angular/forms";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {FormBuilder} from "@angular/forms";
import * as console from "console";

@Component({
  selector: 'app-eladas-csere',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatLabel,
    MatHint,
    MatDatepickerModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule
  ],
  templateUrl: './eladas-csere.component.html',
  styleUrl: './eladas-csere.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EladasCsereComponent {
  eladasCsereForm = this.formBuilder.group({
    partnerName: ['', Validators.required],
    sellDate: ['', Validators.required],
    comment: [''],
    sellPrice: ['', Validators.required],
  });

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    console.log(this.eladasCsereForm.value)
  }
}
