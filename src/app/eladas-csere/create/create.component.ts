import {Component, EventEmitter, inject, Output} from '@angular/core';
import {MatButton} from "@angular/material/button";
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatFormField, MatHint, MatLabel, MatSuffix} from "@angular/material/form-field";
import {MatIcon} from "@angular/material/icon";
import {MatInput} from "@angular/material/input";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {FormBuilder, ReactiveFormsModule, Validators} from "@angular/forms";
import {EladasCsereService} from "../../Services/eladas-csere/eladas-csere.service";
import {EladasCsere} from "../../Entities/EladasCsere";

@Component({
  selector: 'app-create',
  standalone: true,
    imports: [
        MatButton,
        MatCard,
        MatCardContent,
        MatCardHeader,
        MatCardTitle,
        MatDatepicker,
        MatDatepickerInput,
        MatDatepickerToggle,
        MatFormField,
        MatHint,
        MatIcon,
        MatInput,
        MatLabel,
        MatRadioButton,
        MatRadioGroup,
        MatSuffix,
        ReactiveFormsModule
    ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  eladasCsereForm = this.formBuilder.group({
    partnerName: ['', Validators.required],
    sellDate: ['', Validators.required],
    comment: [''],
    sellPrice: ['', Validators.required],
    transactionType: ['', Validators.required]
  });
  eladasCsereService = inject(EladasCsereService);
  @Output() showSuccessMessage = new EventEmitter<boolean>();
  @Output() showFailMessage = new EventEmitter<boolean>();

  constructor(private formBuilder: FormBuilder) {
  }

  onSubmit() {
    if(this.eladasCsereForm.valid){
      let sellDate = (this.eladasCsereForm.value.sellDate?.toString() || '');
      let eladasCsere = new EladasCsere(sellDate,
        this.eladasCsereForm.value.partnerName as string, Number(this.eladasCsereForm.value.sellPrice),
        this.eladasCsereForm.value.comment as string, Number(this.eladasCsereForm.value.transactionType));

      this.eladasCsereService.addEladasCsere(eladasCsere).subscribe(
        () => {
          this.showSuccessMessage.emit(true);
        },
        error => {
          this.showFailMessage.emit(true);
        }
      );
    }
  }

}
