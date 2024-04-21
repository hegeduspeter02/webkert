import {Component} from '@angular/core';
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
import {MatRadioModule} from "@angular/material/radio";
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
    MatCardModule,
    MatRadioModule,
  ],
  templateUrl: './eladas-csere.component.html',
  styleUrl: './eladas-csere.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EladasCsereComponent{
  eladasCsereForm = this.formBuilder.group({
    partnerName: ['', Validators.required],
    sellDate: ['', Validators.required],
    comment: [''],
    sellPrice: ['', Validators.required],
    transactionType: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if(this.eladasCsereForm.valid){
      console.log(this.eladasCsereForm.value);
    }
  }
}
