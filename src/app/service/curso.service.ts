import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Curso } from '../models/curso';
import { RequestOptions, Http, Response, Headers } from '@angular/http';

@Injectable()
export class CursoService {

    private base: string;
    private id;

    constructor(public http: Http) {
        this.base = 'http://localhost:8000/';
    }

    create(token, curso: any): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.base + 'curso/registro', JSON.stringify(curso), options);
    }

    getCursos(token): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.base + 'curso', options);
    }

    getCurso(token, id): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.base + 'curso/' + id, options);
    }

    update(token, curso: any): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.base + 'curso/update', JSON.stringify(curso), options);
    }

    delete(token, code): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.put(this.base + 'curso/eliminar', JSON.stringify(code), options);
    }

    getProfesorCurso(token, id): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.get(this.base + 'curso/' + id + '/mostrar-profesores', options);
    }

    addProfesor(token, request: any): Observable<any> {
        let headers = new Headers({ 'Authorization': token, 'Content-Type': 'application/json' });
        let options = new RequestOptions({ headers: headers });
        return this.http.post(this.base + 'curso/registro-profesor', JSON.stringify(request), options);
    }

    getId() {
        let id = localStorage.getItem('id');
        if (id != "undefined") {
            this.id = id;
        } else {
            this.id = null;
        }
        return this.id;
    }
}