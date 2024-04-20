import {inject, Injectable} from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  doc,
  updateDoc,
  setDoc,
  deleteDoc
} from "@angular/fire/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {forkJoin, from, map, Observable, switchMap} from "rxjs";
import {Orszag} from "../Entities/Orszag";
import {CimkeTipus} from "../Entities/CimkeTipus";
import {Nyilvantartas} from "../Entities/Nyilvantartas";

@Injectable({
  providedIn: 'root'
})
export class TableService {
  firestore = inject(Firestore);
  orszagokCollection = collection(this.firestore, 'orszagok');
  gyufacimkeCollection = collection(this.firestore, 'gyufacimkek');
  cimkeTipusCollection = collection(this.firestore, 'cimke_tipusok');
  nyilvantartasCollection = collection(this.firestore, 'nyilvantartasok');
  maxId : number | undefined;

  constructor() {
    this.getAllGyufacimke().subscribe(gyufacimkes => {
      this.maxId = Math.max(...gyufacimkes.map(g => Number(g.id)));

      if (this.maxId === -Infinity) {
        this.maxId = 100000;
      }
    });
  }

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

    newGyufacimke.id = String(this.maxId as number + 1);

    const docRef = doc(this.firestore, 'gyufacimkek', newGyufacimke.id);
    return from(setDoc(docRef, newGyufacimke)).pipe(map(() => {}));
  }

  saveGyufacimke(gyufacimkek: Gyufacimke[]): Observable<void>{
    const observables = gyufacimkek.map(gyufacimke => {
        const docRef = doc(this.firestore, 'gyufacimkek', gyufacimke.id as string);
        return from(updateDoc(docRef, gyufacimke));
    });

    return forkJoin(observables).pipe(map(() => {}));
  }

  deleteGyufacimke(gyufacimkek: Gyufacimke[]): Observable<void> {
    const observables = gyufacimkek.map(gyufacimke => {
      const docRef = doc(this.firestore, 'gyufacimkek', gyufacimke.id as string);
      return from(deleteDoc(docRef));
    });

    return forkJoin(observables).pipe(map(() => {}));
  }
}

