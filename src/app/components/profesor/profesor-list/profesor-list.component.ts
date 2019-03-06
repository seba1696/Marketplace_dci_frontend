import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';
import { UserService } from '../../../service/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from 'app/models/user';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.scss']
  , providers: [UserService, ProfesorService]
})
export class ProfesorListComponent implements OnInit {

  public profesores: Array<Profesor>;
  public usuarios: Array<User>;
  public token;
  public body;

  constructor(
    private _profesorService: ProfesorService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.token = this._userService.getToken();
    this.profesores = [];
    this.usuarios = [];
  }

  ngOnInit() {
    this._profesorService.getProfesores(this.token).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.profesores = this.body.profesores;
          /*this._userService.getUsuarios(this.token).subscribe(
            response => {
              if (response.statusText == 'OK') {
                this.body = JSON.parse(response._body);
                this.usuarios = this.body.usuarios;
                console.log(this.usuarios);
              }
            },
            error => {
              console.log(error);
            }
          );*/
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  getProfesor(id) {
    this._profesorService.getProfesor(this.token, id).subscribe(
      response => {
        if (response.status == 'success') {
          this.profesores = response.profesores;
        } else {
          this._router.navigate(['/profesor']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  deleteProfesor(id) {
    console.log(id);
    this._profesorService.delete(this.token, id).subscribe(
      response => {
        console.log(response);
        this._router.navigate['profesor'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
