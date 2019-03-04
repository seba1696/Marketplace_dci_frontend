import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';
import {UserService} from '../../../service/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.scss']
  ,providers:[ProfesorService]
})
export class ProfesorListComponent implements OnInit {

  public profesores: Array<Profesor>;
  public profesor1;
  public token;

  constructor(
    private _profesorService: ProfesorService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService : UserService
  ) { 
    this.token=this._userService.getToken();
  }

  ngOnInit() {
    this._profesorService.getProfesores(this.token).subscribe(
      response => {
        if (response.status == 'success') {
          this.profesores = response.profesores;
        }
      },
      error => {
        console.log(error);
      }
    );
    this.profesor1 = new Profesor(1, 'A', 'a', 2);
    this.profesores = [this.profesor1];
  }

  deleteProfesor(id) {
    this._profesorService.delete(this.token, id).subscribe(
      response => {
        this._router.navigate['profesor'];
      },
      error => {
        console.log(<any>error);
      } 
    );
  }

}
