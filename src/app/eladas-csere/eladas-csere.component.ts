import {Component} from '@angular/core';
import {provideNativeDateAdapter} from "@angular/material/core";
import {MatCardModule} from "@angular/material/card";
import {NgIf} from "@angular/common";
import {CreateComponent} from "./create/create.component";
import {UpdateDeleteComponent} from "./update-delete/update-delete.component";

@Component({
  selector: 'app-eladas-csere',
  standalone: true,
  imports: [
    MatCardModule,
    NgIf,
    CreateComponent,
    UpdateDeleteComponent,
  ],
  templateUrl: './eladas-csere.component.html',
  styleUrl: './eladas-csere.component.css',
  providers: [provideNativeDateAdapter()],
})
export class EladasCsereComponent{
  showSuccessMessage: boolean = false;

  onShowSuccesMessage($event: boolean) {
    this.showSuccessMessage = $event;
  }
}
