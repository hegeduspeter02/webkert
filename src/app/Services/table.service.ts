import {Injectable} from '@angular/core';
import {AngularFirestore} from "@angular/fire/compat/firestore";
import {Gyufacimke} from "../Entities/Gyufacimke";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private db: AngularFirestore) {
  }

  insertData(gyufacimke: Gyufacimke) {
    return this.db.collection('gyufacimke').add({...gyufacimke});
  }

}
