import {inject, Injectable} from '@angular/core';
import {Firestore, collection, collectionData, addDoc} from "@angular/fire/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {from, map, Observable} from "rxjs";
import {Orszag} from "../Entities/Orszag";
import {CimkeTipus} from "../Entities/CimkeTipus";
import {Nyilvantartas} from "../Entities/Nyilvantartas";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  firestore = inject(Firestore);
  orszagokCollection = collection(this.firestore, 'orszagok');
  gyufacimkeCollection = collection(this.firestore, 'gyufacimke');
  cimkeTipusCollection = collection(this.firestore, 'cimke_tipusok');
  nyilvantartasCollection = collection(this.firestore, 'nyilvantartasok');

  getAllGyufacimke(): Observable<Gyufacimke[]> {
    return collectionData(this.gyufacimkeCollection,
      {idField: 'id'
      }) as Observable<Gyufacimke[]>;
  }

  getAllCimkeTipus(): Observable<CimkeTipus[]> {
    return collectionData(this.cimkeTipusCollection,
      {idField: 'id'
      }) as Observable<CimkeTipus[]>;
  }

  getAllNyilvantartas(): Observable<Nyilvantartas[]> {
    return collectionData(this.nyilvantartasCollection,
      {idField: 'id'
      }) as Observable<Nyilvantartas[]>;
  }

  getAllOrszag(): Observable<Orszag[]> {
    return collectionData(this.orszagokCollection,
      {idField: 'id'
      }) as Observable<Orszag[]>;
  }

  addGyufacimke(gyufacimke: Gyufacimke): Observable<void> {
    const newGyufacimke = gyufacimke.toPlainObject();
    const promise = addDoc(this.gyufacimkeCollection, newGyufacimke).then(() => {
    });
    return from(promise);
  }
}

