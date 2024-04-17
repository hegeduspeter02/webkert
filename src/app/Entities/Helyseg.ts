export class Helyseg {
  private _starting_code: number;
  private _nev: string;

  constructor(starting_code: number, nev: string) {
    this._starting_code = starting_code;
    this._nev = nev;
  }

  get starting_code(): number {
    return this._starting_code;
  }

  set starting_code(value: number) {
    this._starting_code = value;
  }

  get nev(): string {
    return this._nev;
  }

  set nev(value: string) {
    this._nev = value;
  }
}
