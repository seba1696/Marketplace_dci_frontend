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

  public profesores: Array<any>;
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
  }

  ngOnInit() {
    this._profesorService.getProfesores(this.token).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.profesores = this.body.profesores;
        }
      },
      error => {
        console.log(error);
      }
    );
  }

  deleteProfesor(run) {
    this._profesorService.delete(this.token, run).subscribe(
      response => {
        console.log(response);
        this._router.navigate['profesor'];
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  editProfesor(id) {
    console.log(id);
    localStorage.setItem('id', id);
  }

}
