export class EladasCsere {
  private _id: string|undefined;
  private _datum: string;
  private _vevo: string;
  private _eladasi_ar: number;
  private _megjegyzes: string;
  private _tranzakcio_tipusa: number;

  constructor(datum: string, vevo: string, eladasi_ar: number, megjegyzes: string, tranzakcio_tipusa: number, id?: string | undefined) {
    this._id = id;
    this._datum = datum;
    this._vevo = vevo;
    this._eladasi_ar = eladasi_ar;
    this._megjegyzes = megjegyzes;
    this._tranzakcio_tipusa = tranzakcio_tipusa;
  }

  toPlainObject() {
    return {
      id: this._id,
      datum: this._datum,
      vevo: this._vevo,
      eladasi_ar: this._eladasi_ar,
      megjegyzes: this._megjegyzes,
      tranzakcio_tipusa: this._tranzakcio_tipusa
    }
  }

  get id(): string | undefined {
    return this._id;
  }

  set id(value: string | undefined) {
    this._id = value;
  }

  get datum(): string {
    return this._datum;
  }

  set datum(value: string) {
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

  get tranzakcio_tipusa(): number {
    return this._tranzakcio_tipusa;
  }

  set tranzakcio_tipusa(value: number) {
    this._tranzakcio_tipusa = value;
  }
}
