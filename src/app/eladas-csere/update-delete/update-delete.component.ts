import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {EladasCsere} from "../../Entities/EladasCsere";
import {FormArray, FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {EladasCsereService} from "../../Services/eladas-csere/eladas-csere.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";

@Component({
  selector: 'app-update-delete',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent,
    MatExpansionModule,
    NgForOf,
    DatePipe,
    NgIf,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatIcon,
    ReactiveFormsModule,
    MatDatepicker,
    MatDatepickerInput,
    MatDatepickerToggle,
    AsyncPipe,
    MatRadioButton,
    MatRadioGroup,
    MatButton
  ],
  templateUrl: './update-delete.component.html',
  styleUrl: './update-delete.component.css'
})
export class UpdateDeleteComponent implements OnInit {
  eladasCsereService = inject(EladasCsereService);
  eladasCserek: EladasCsere[];
  selectedEladasCsereId: string | undefined;
  panelOpenState = false;

  eladasCsereUpdateForm = this.formBuilder.group({
    partnerNameModify: ['', Validators.required],
    sellDateModify: ['', Validators.required],
    commentModify: [''],
    sellPriceModify: ['', Validators.required],
    transactionTypeModify: ['', Validators.required]
  });

  constructor(private formBuilder: FormBuilder) {
    this.eladasCserek = [];
  }

  ngOnInit(): void {
    this.eladasCsereService.getAllEladasCsere().subscribe(eladacs_cserek => {
      this.eladasCserek = eladacs_cserek.map(eladas_csere => {
        return eladas_csere;
      });
    });
  }

  onSubmit() {
    console.log(this.selectedEladasCsereId);
  }
}
