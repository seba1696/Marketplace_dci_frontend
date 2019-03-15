import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../service/curso.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
  , providers: [UserService, CursoService]
})
export class CursoListComponent implements OnInit {

  public cursos: Array<any>;
  public token;
  public body;

  constructor(
    private _cursoService: CursoService, private _userService: UserService
  ) {
    this.token = this._userService.getToken();
    this.cursos = [];
  }

  ngOnInit() {
    this._cursoService.getCursos(this.token).subscribe(
      response => {
        console.log(response);
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.cursos = this.body.cursos;
          console.log(this.cursos);
        }
      },
      error => {
        console.log(error);
      }
    );

  }

}
