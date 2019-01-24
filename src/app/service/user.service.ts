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

  constructor(private _http: HttpClient) {
    this.url = environment.urlApi;
    this.port = environment.portApi
  }

  loginUsuario(user: User) {
    return this._http.post(this.url + this.port + '', user);
  }
  getIdentity() {

  }

  getToken() {

  }
}
