import {Component, inject, OnInit} from '@angular/core';
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
import {EladasCsere} from "../Entities/EladasCsere";
import {TableService} from "../Services/table.service";
import {EladasCsereService} from "../Services/eladas-csere.service";
import {NgIf} from "@angular/common";

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
    NgIf,
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
  tableService = inject(EladasCsereService);
  showSuccessMessage = false;
  showFailMessage = false;

  constructor(private formBuilder: FormBuilder) {}

  onSubmit() {
    if(this.eladasCsereForm.valid){
      let sellDate = (this.eladasCsereForm.value.sellDate?.toString() || '');
      let eladasCsere = new EladasCsere(sellDate,
        this.eladasCsereForm.value.partnerName as string, Number(this.eladasCsereForm.value.sellPrice),
        this.eladasCsereForm.value.comment as string, Number(this.eladasCsereForm.value.transactionType));

      this.tableService.addEladasCsere(eladasCsere).subscribe(
        () => {
          this.showSuccessMessage = true;
        },
        error => {
          this.showFailMessage = true;
        }
      );
    }
  }
}
