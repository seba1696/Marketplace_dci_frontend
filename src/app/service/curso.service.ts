import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Curso } from '../models/curso';
import { RequestOptions, Http, Response, Headers } from '@angular/http';


@Injectable()
export class CursoService {
    public url: string;
    constructor(public _http: HttpClient) {

    }

    pruebas() {
        return "Hola mundo";
    }

    create(token, curso: Curso): Observable<any> {
        let json = JSON.stringify(curso);
        let params = "json" + json;
        let headers = new HttpHeaders().set('Content-type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.post(this.url + 'ruta-api', params, { headers: headers });
    }

    getCursos(token): Observable<any> {
        /*let headers1 = new Headers({
            'Authorization': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MTEsInJ1biI6IjAxMDEwMTAxIiwicGFzcyI6IjAzYWM2NzQyMTZmM2UxNWM3NjFlZTFhNWUyNTVmMDY3OTUzNjIzYzhiMzg4YjQ0NTllMTNmOTc4ZDdjODQ2ZjQiLCJyb2wiOjEsImlhdCI6MTU0ODQxOTYyNiwiZXhwIjoxNTQ5MDI0NDI2fQ.B9SgBr7Zumgc_asP3JAkd79vCwezxvzo9OaKhRxmgd0'
        });
        let options = new RequestOptions({ headers: headers1 });
        return this._http.get('http://localhost:8000/marketplace/Marketplace/public/curso', options).map((res: Response) => res.json());*/
        let headers = new HttpHeaders().set('Authorization', token);
        return this._http.get('http://localhost:8000/marketplace/Marketplace/public/curso', { headers: headers });
    }

    getCurso(id): Observable<any> {
        return this._http.get(this.url + 'ruta-api/' + id);
    }

    update(token, curso, id): Observable<any> {
        let json = JSON.stringify(curso);
        let params = "json=" + json;
        let headers = new HttpHeaders().set('Content-Type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.put(this.url + 'url-api' + id, params, { headers: headers });
    }

    delete(token, id): Observable<any> {
        let headers = new HttpHeaders().set('Content-Type', 'application/x-form-urlencode')
            .set('Authorization', token);
        return this._http.delete(this.url + 'url-api' + id, { headers: headers });
    }
}