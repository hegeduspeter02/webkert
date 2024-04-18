import {inject, Injectable} from '@angular/core';
import {Firestore, collection, collectionData, addDoc} from "@angular/fire/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {from, Observable} from "rxjs";
import {Orszag} from "../Entities/Orszag";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  firestore = inject(Firestore);
  orszagokCollection = collection(this.firestore, 'orszagok');
  gyufacimkeCollection = collection(this.firestore, 'gyufacimke');

  getOrszagok(): Observable<Orszag[]>{
    return collectionData(this.orszagokCollection,
      {idField: 'id'
      }) as Observable<Orszag[]>;
  }

  addGyufacimke(gyufacimke: Gyufacimke):Observable<void>{
    const newGyufacimke = gyufacimke.toPlainObject();
    const promise = addDoc(this.gyufacimkeCollection, newGyufacimke).then(() => {});
    return from(promise);
  }
}

