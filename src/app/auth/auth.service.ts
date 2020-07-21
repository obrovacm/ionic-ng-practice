import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AuthService {
  private _isAuthenticated = false;

  get isAuthenticated(){
    if(!this._isAuthenticated){
      if(localStorage.getItem('isAuthenticated') === 'true'){
        this._isAuthenticated = true;
      };
    }
    return this._isAuthenticated;
  }

  constructor() {}

  login() {
    this._isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  logout() {
    this._isAuthenticated = false;
    localStorage.setItem('isAuthenticated', 'false');
  }
}
