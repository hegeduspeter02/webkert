import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {EladasCsere} from "../../Entities/EladasCsere";
import {FormBuilder, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {EladasCsereService} from "../../Services/eladas-csere/eladas-csere.service";
import {MatExpansionModule} from "@angular/material/expansion";
import {AsyncPipe, DatePipe, NgForOf, NgIf} from "@angular/common";
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatIcon} from "@angular/material/icon";
import {MatDatepicker, MatDatepickerInput, MatDatepickerToggle} from "@angular/material/datepicker";
import {MatRadioButton, MatRadioGroup} from "@angular/material/radio";
import {MatButton} from "@angular/material/button";
import {MatButtonModule} from "@angular/material/button";

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
    MatButton,
    MatButtonModule
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
    if (this.eladasCsereUpdateForm.valid) {
      let sellDate = (this.eladasCsereUpdateForm.value.sellDateModify || new Date());
      let eladasCsere = new EladasCsere(this.eladasCsereUpdateForm.value.sellDateModify as string,
        this.eladasCsereUpdateForm.value.partnerNameModify as string, Number(this.eladasCsereUpdateForm.value.sellPriceModify),
        this.eladasCsereUpdateForm.value.commentModify as string, Number(this.eladasCsereUpdateForm.value.transactionTypeModify), this.selectedEladasCsereId);

      this.eladasCsereService.updateEladasCsere(eladasCsere).subscribe(
        () => {
          this.eladasCsereService.getAllEladasCsere().subscribe(eladacs_cserek => {
            this.eladasCserek = eladacs_cserek.map(eladas_csere => {
              return eladas_csere;
            });
          });
        }
      );
    }
  }

  onDelete() {
    this.eladasCsereService.deleteEladasCsere(this.selectedEladasCsereId as string).subscribe(
      () => {
        this.eladasCsereService.getAllEladasCsere().subscribe(eladacs_cserek => {
          this.eladasCserek = eladacs_cserek.map(eladas_csere => {
            return eladas_csere;
          });
        });
      }
    );
  }

  initializeForm(eladasCsere: EladasCsere) {
    this.eladasCsereUpdateForm.controls.partnerNameModify.setValue(eladasCsere.vevo);
    this.eladasCsereUpdateForm.controls.sellDateModify.setValue(eladasCsere.datum);
    this.eladasCsereUpdateForm.controls.commentModify.setValue(eladasCsere.megjegyzes);
    this.eladasCsereUpdateForm.controls.sellPriceModify.setValue(String(eladasCsere.eladasi_ar));
    this.eladasCsereUpdateForm.controls.transactionTypeModify.setValue(String(eladasCsere.tranzakcio_tipusa));
  }
}
