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
import {EladasCsere} from "../../Entities/EladasCsere";
import {forkJoin, from, map, Observable, switchMap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EladasCsereService {
  firestore = inject(Firestore);
  nyilvantartasCollection = collection(this.firestore, 'eladas_cserek');
  maxId : number | undefined;

  constructor() {
    this.getAllEladasCsere().subscribe(eladas_cserek => {
      this.maxId = Math.max(...eladas_cserek.map(g => Number(g.id)));

      if (this.maxId === -Infinity) {
        this.maxId = 100000;
      }
    });
  }

  getAllEladasCsere(): Observable<EladasCsere[]> {
    return collectionData(this.nyilvantartasCollection,
      {idField: 'id'
      }) as Observable<EladasCsere[]>;
  }

  addEladasCsere(eladas_csere: EladasCsere): Observable<void> {
    const newEladasCsere = eladas_csere.toPlainObject();

    newEladasCsere.id = String(this.maxId as number + 1);

    const docRef = doc(this.firestore, 'eladas_cserek', newEladasCsere.id);
    return from(setDoc(docRef, newEladasCsere)).pipe(map(() => {}));
  }
}
