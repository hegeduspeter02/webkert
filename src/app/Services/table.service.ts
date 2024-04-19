import {inject, Injectable} from '@angular/core';
import {
  Firestore,
  collection,
  collectionData,
  addDoc,
  doc,
  getDoc,
  updateDoc,
  setDoc,
  deleteDoc
} from "@angular/fire/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";
import {forkJoin, from, map, Observable} from "rxjs";
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

  saveGyufacimke(gyufacimkek: Gyufacimke[]): Observable<void>{
    const observables = gyufacimkek.map(gyufacimke => {
      const newGyufacimke = gyufacimke.toPlainObject();
      if (newGyufacimke.id) {
        // If id exists, update the document
        const docRef = doc(this.firestore, 'gyufacimkek', newGyufacimke.id);
        return from(updateDoc(docRef, newGyufacimke));
      } else {
        // If id does not exist, add a new document with auto-generated id
        return from(addDoc(this.gyufacimkeCollection, newGyufacimke));
      }
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

