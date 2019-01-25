import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Alumno } from '../models/alumno';


@Injectable()
export class AlumnoService {
    public url: string;
    constructor(public _http: HttpClient) {

    }

    pruebas() {
        return "Hola mundo";
    }

    create(token, alumno: Alumno): Observable<any> {
        let json = JSON.stringify(alumno);
        let params = "json" + json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.post(this.url + 'ruta-api', params, { headers: headers });
    }

    getAlumnos(): Observable<any> {
        let headers = new HttpHeaders().set('Content-type', 'application/x-form-urlencode');
        return this._http.get(this.url + 'ruta-api', { headers: headers });
    }
}