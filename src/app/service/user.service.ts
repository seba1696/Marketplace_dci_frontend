import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url: string;
  private port: string;
  private token;

  constructor(private _http: HttpClient) {
    this.url = environment.urlApi;
    this.port = environment.portApi
  }

  loginUsuario(user: User) {
    return this._http.post(this.url + this.port + '/marketplace/Marketplace/public/usuario/login', user);
  }
  getIdentity() {

  }

  getToken() {
    let token = JSON.parse(localStorage.getItem('token'));
    if (token != "undefined") {
      this.token = token;
    } else {
      this.token = null;
    }
    return this.token;
  }
}
