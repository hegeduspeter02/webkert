export class Gyufacimke {
  private _sorszam: number;
  private _digitalizalasi_azon: number;
  private _adatb_azon: number;
  private _nyilv_vetel_datum: Date;
  private _tipus_id: string;
  private _meret_x: number;
  private _meret_y: number;
  private _megnevezes: string;
  private _kulcsszavak: string[];
  private _orszag_id: string;
  private _helyseg_id: string;
  private _ev: number;
  private _cimke_megjegyzes: string;
  private _nyilvantartas_id: string;
  private _beszerzesi_datum: Date;
  private _elado_neve: string;
  private _bekerulesi_ertek: number;
  private _jarulekos_koltseg: number;
  private _tarolasi_infomacio: string;
  private _vetel_megjegyzes: string;
  private _becsult_ertek: number;
  private _eladas_csere_id: string;

  constructor(sorszam: number, digitalizalasi_azon: number, adatb_azon: number, nyilv_vetel_datum: Date, tipus_id: string, meret_x: number, meret_y: number, megnevezes: string, kulcsszavak: string[], orszag_id: string, helyseg_id: string, ev: number, cimke_megjegyzes: string, nyilvantartas_id: string, beszerzesi_datum: Date, elado_neve: string, bekerulesi_ertek: number, jarulekos_koltseg: number, tarolasi_infomacio: string, vetel_megjegyzes: string, becsult_ertek: number, eladas_csere_id: string) {
    this._sorszam = sorszam;
    this._digitalizalasi_azon = digitalizalasi_azon;
    this._adatb_azon = adatb_azon;
    this._nyilv_vetel_datum = nyilv_vetel_datum;
    this._tipus_id = tipus_id;
    this._meret_x = meret_x;
    this._meret_y = meret_y;
    this._megnevezes = megnevezes;
    this._kulcsszavak = kulcsszavak;
    this._orszag_id = orszag_id;
    this._helyseg_id = helyseg_id;
    this._ev = ev;
    this._cimke_megjegyzes = cimke_megjegyzes;
    this._nyilvantartas_id = nyilvantartas_id;
    this._beszerzesi_datum = beszerzesi_datum;
    this._elado_neve = elado_neve;
    this._bekerulesi_ertek = bekerulesi_ertek;
    this._jarulekos_koltseg = jarulekos_koltseg;
    this._tarolasi_infomacio = tarolasi_infomacio;
    this._vetel_megjegyzes = vetel_megjegyzes;
    this._becsult_ertek = becsult_ertek;
    this._eladas_csere_id = eladas_csere_id;
  }

  toPlainObject() {
    return {
      sorszam: this._sorszam,
      digitalizalasi_azon: this._digitalizalasi_azon,
      adatb_azon: this._adatb_azon,
      nyilv_vetel_datum: this._nyilv_vetel_datum,
      tipus_id: this._tipus_id,
      meret_x: this._meret_x,
      meret_y: this._meret_y,
      megnevezes: this._megnevezes,
      kulcsszavak: this._kulcsszavak,
      orszag_id: this._orszag_id,
      helyseg_id: this._helyseg_id,
      ev: this._ev,
      cimke_megjegyzes: this._cimke_megjegyzes,
      nyilvantartas_id: this._nyilvantartas_id,
      beszerzesi_datum: this._beszerzesi_datum,
      elado_neve: this._elado_neve,
      bekerulesi_ertek: this._bekerulesi_ertek,
      jarulekos_koltseg: this._jarulekos_koltseg,
      tarolasi_infomacio: this._tarolasi_infomacio,
      vetel_megjegyzes: this._vetel_megjegyzes,
      becsult_ertek: this._becsult_ertek,
      eladas_csere_id: this._eladas_csere_id
    }
  }

  static fromFirestore(doc: any): Gyufacimke {
    return new Gyufacimke(
      doc.sorszam,
      doc.digitalizalasi_azon,
      doc.adatb_azon,
      doc.nyilv_vetel_datum.toDate(),
      doc.tipus_id,
      doc.meret_x,
      doc.meret_y,
      doc.megnevezes,
      doc.kulcsszavak,
      doc.orszag_id,
      doc.helyseg_id,
      doc.ev,
      doc.cimke_megjegyzes,
      doc.nyilvantartas_id,
      doc.beszerzesi_datum.toDate(),
      doc.elado_neve,
      doc.bekerulesi_ertek,
      doc.jarulekos_koltseg,
      doc.tarolasi_infomacio,
      doc.vetel_megjegyzes,
      doc.becsult_ertek,
      doc.eladas_csere_id
    );
  }

  get sorszam(): number {
    return this._sorszam;
  }

  set sorszam(value: number) {
    this._sorszam = value;
  }

  get digitalizalasi_azon(): number {
    return this._digitalizalasi_azon;
  }

  set digitalizalasi_azon(value: number) {
    this._digitalizalasi_azon = value;
  }

  get adatb_azon(): number {
    return this._adatb_azon;
  }

  set adatb_azon(value: number) {
    this._adatb_azon = value;
  }

  get nyilv_vetel_datum(): Date {
    return this._nyilv_vetel_datum;
  }

  set nyilv_vetel_datum(value: Date) {
    this._nyilv_vetel_datum = value;
  }

  get tipus_id(): string {
    return this._tipus_id;
  }

  set tipus_id(value: string) {
    this._tipus_id = value;
  }

  get meret_x(): number {
    return this._meret_x;
  }

  set meret_x(value: number) {
    this._meret_x = value;
  }

  get meret_y(): number {
    return this._meret_y;
  }

  set meret_y(value: number) {
    this._meret_y = value;
  }

  get megnevezes(): string {
    return this._megnevezes;
  }

  set megnevezes(value: string) {
    this._megnevezes = value;
  }

  get kulcsszavak(): string[] {
    return this._kulcsszavak;
  }

  set kulcsszavak(value: string[]) {
    this._kulcsszavak = value;
  }

  get orszag_id(): string {
    return this._orszag_id;
  }

  set orszag_id(value: string) {
    this._orszag_id = value;
  }

  get helyseg_id(): string {
    return this._helyseg_id;
  }

  set helyseg_id(value: string) {
    this._helyseg_id = value;
  }

  get ev(): number {
    return this._ev;
  }

  set ev(value: number) {
    this._ev = value;
  }

  get cimke_megjegyzes(): string {
    return this._cimke_megjegyzes;
  }

  set cimke_megjegyzes(value: string) {
    this._cimke_megjegyzes = value;
  }

  get nyilvantartas_id(): string {
    return this._nyilvantartas_id;
  }

  set nyilvantartas_id(value: string) {
    this._nyilvantartas_id = value;
  }

  get beszerzesi_datum(): Date {
    return this._beszerzesi_datum;
  }

  set beszerzesi_datum(value: Date) {
    this._beszerzesi_datum = value;
  }

  get elado_neve(): string {
    return this._elado_neve;
  }

  set elado_neve(value: string) {
    this._elado_neve = value;
  }

  get bekerulesi_ertek(): number {
    return this._bekerulesi_ertek;
  }

  set bekerulesi_ertek(value: number) {
    this._bekerulesi_ertek = value;
  }

  get jarulekos_koltseg(): number {
    return this._jarulekos_koltseg;
  }

  set jarulekos_koltseg(value: number) {
    this._jarulekos_koltseg = value;
  }

  get tarolasi_infomacio(): string {
    return this._tarolasi_infomacio;
  }

  set tarolasi_infomacio(value: string) {
    this._tarolasi_infomacio = value;
  }

  get vetel_megjegyzes(): string {
    return this._vetel_megjegyzes;
  }

  set vetel_megjegyzes(value: string) {
    this._vetel_megjegyzes = value;
  }

  get becsult_ertek(): number {
    return this._becsult_ertek;
  }

  set becsult_ertek(value: number) {
    this._becsult_ertek = value;
  }

  get eladas_csere_id(): string {
    return this._eladas_csere_id;
  }

  set eladas_csere_id(value: string) {
    this._eladas_csere_id = value;
  }
}
