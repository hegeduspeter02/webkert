import {inject, Injectable} from '@angular/core';
import {Firestore, collection, collectionData, addDoc} from "@angular/fire/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {from, map, Observable} from "rxjs";
import {Orszag} from "../Entities/Orszag";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  firestore = inject(Firestore);
  orszagokCollection = collection(this.firestore, 'orszagok');
  gyufacimkeCollection = collection(this.firestore, 'gyufacimke');

  getAll(): Observable<Gyufacimke[]> {
    return collectionData(this.gyufacimkeCollection,
      {idField: 'id'
      }).pipe(
      map(docs => docs.map(Gyufacimke.fromFirestore))
    ) as Observable<Gyufacimke[]>;
  }

  addGyufacimke(gyufacimke: Gyufacimke): Observable<void> {
    const newGyufacimke = gyufacimke.toPlainObject();
    const promise = addDoc(this.gyufacimkeCollection, newGyufacimke).then(() => {
    });
    return from(promise);
  }
}

