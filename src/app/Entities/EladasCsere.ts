export class EladasCsere {
  private _datum: Date;
  private _vevo: string;
  private _eladasi_ar: number;
  private _megjegyzes: string;

  constructor(datum: Date, vevo: string, eladasi_ar: number, megjegyzes: string) {
    this._datum = datum;
    this._vevo = vevo;
    this._eladasi_ar = eladasi_ar;
    this._megjegyzes = megjegyzes;
  }

  get datum(): Date {
    return this._datum;
  }

  set datum(value: Date) {
    this._datum = value;
  }

  get vevo(): string {
    return this._vevo;
  }

  set vevo(value: string) {
    this._vevo = value;
  }

  get eladasi_ar(): number {
    return this._eladasi_ar;
  }

  set eladasi_ar(value: number) {
    this._eladasi_ar = value;
  }

  get megjegyzes(): string {
    return this._megjegyzes;
  }

  set megjegyzes(value: string) {
    this._megjegyzes = value;
  }


}
