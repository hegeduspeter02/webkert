export class Orszag {
  private _nev: string;
  private _rovidites: string;

  constructor(nev: string, rovidites: string) {
    this._nev = nev;
    this._rovidites = rovidites;
  }

  get nev(): string {
    return this._nev;
  }

  set nev(value: string) {
    this._nev = value;
  }

  get rovidites(): string {
    return this._rovidites;
  }

  set rovidites(value: string) {
    this._rovidites = value;
  }
}
