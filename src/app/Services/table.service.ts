import {inject, Injectable} from '@angular/core';
import {Firestore, collection, collectionData} from "@angular/fire/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {Observable} from "rxjs";
import {Orszag} from "../Entities/Orszag";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  firestore = inject(Firestore);
  orszagokCollection = collection(this.firestore, 'orszagok');

  getOrszagok(): Observable<Orszag[]>{
    return collectionData(this.orszagokCollection,
      {idField: 'id'
      }) as Observable<Orszag[]>;
  }
}

