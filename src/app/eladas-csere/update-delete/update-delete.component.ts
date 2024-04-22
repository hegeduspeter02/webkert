import {Component, inject, OnInit} from '@angular/core';
import {MatCard, MatCardContent, MatCardHeader, MatCardTitle} from "@angular/material/card";
import {EladasCsere} from "../../Entities/EladasCsere";
import {FormBuilder} from "@angular/forms";
import {EladasCsereService} from "../../Services/eladas-csere/eladas-csere.service";

@Component({
  selector: 'app-update-delete',
  standalone: true,
  imports: [
    MatCard,
    MatCardHeader,
    MatCardTitle,
    MatCardContent
  ],
  templateUrl: './update-delete.component.html',
  styleUrl: './update-delete.component.css'
})
export class UpdateDeleteComponent implements OnInit{
  eladasCserek: EladasCsere[];
  eladasCsereService = inject(EladasCsereService);
  constructor(private formBuilder: FormBuilder) {
    this.eladasCserek = [];
  }

  ngOnInit(): void {
    this.eladasCsereService.getAllEladasCsere().subscribe(eladacs_cserek => {
      this.eladasCserek = eladacs_cserek.map(eladas_csere => {
        return eladas_csere;
      });
      console.log(this.eladasCserek);
    });
  }
}
