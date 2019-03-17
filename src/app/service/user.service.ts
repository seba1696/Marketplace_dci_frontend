import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { Observable } from 'rxjs';
import { RequestOptions, Headers, Http, Response } from '@angular/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private base: string;
  private token;
  private url: string;
  private port: string;

  constructor(private http: Http) {
    this.url = environment.urlApi;
    this.port = environment.portApi;
    this.base = this.url + this.port;
  }

  loginUsuario(user: any, getToken = null): Observable<any> {
    //let json = JSON.stringify(user);
    if (getToken != null) {
      user.getToken = 'true';
    }
    let headers = new Headers({ 'Content-Type': 'application/json; charset=utf-8' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.base + '/usuario/login', JSON.stringify(user), options);
  }

  create(token, user: any): Observable<any> {
    let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.post(this.base + '/usuario/registro', JSON.stringify(user), options);
  }

  getUsuario(token, id): Observable<any> {
    let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.base + '/usuario/' + id, options);
  }

  getUsuarios(token): Observable<any> {
    let headers = new Headers({ 'Authorization': token });
    let options = new RequestOptions({ headers: headers });
    return this.http.get(this.base + '/usuario', options);
  }

  //Recizar si es necesaria la utilzación de este método
  update(token, user: User): Observable<any> {
    let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this.http.put(this.base + '/usuario/update', JSON.stringify(user), options);
  }

  getToken() {
    let token = localStorage.getItem('token');
    if (token != null) {
      let tokenClear = token.slice(1, token.length);
      this.token = tokenClear;
    } else {
      this.token = null;
    }
    return this.token;
  }

  /*getIdentity() {
  }*/
}
