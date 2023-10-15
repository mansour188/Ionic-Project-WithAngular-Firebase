import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  private _email: string | null="" ;
  public get email(): string | null  {
    return this._email;
  }
  public set email(value: string | null ) {
    this._email = value;
  }

  constructor() { }
}
