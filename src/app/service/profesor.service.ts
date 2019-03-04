import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Profesor } from '../models/profesor';


@Injectable()
export class ProfesorService {
    public url: string;
    constructor(public _http: HttpClient) {

    }

    pruebas() {
        return "Hola mundo";
    }

    create(token, profesor: Profesor): Observable<any> {
        let json = JSON.stringify(profesor);
        let params = "json" + json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.post(this.url + 'ruta-api', params, { headers: headers });
    }

    getProfesores(token): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);
        return this._http.get('http://localhost/marketplace/Marketplace/public/profesor', { headers: headers });
    }

    getProfesor(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Authorization', token);
        return this._http.get('http://localhost/marketplace/Marketplace/public/profesor/' + id, { headers: headers });
    }

    delete(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.delete('http://localhost/marketplace/Marketplace/public/profesor/eliminar/' + id, { headers: headers });
    }
}