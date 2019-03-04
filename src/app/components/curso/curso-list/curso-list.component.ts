import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../service/curso.service';
import { UserService } from '../../../service/user.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
  , providers: [CursoService]
})
export class CursoListComponent implements OnInit {

  public cursos: Array<Curso>;
  public curso1;
  public token;
  constructor(
    private _cursoService: CursoService, private _userService: UserService
  ) {
    this.token = this._userService.getToken();

  }

  ngOnInit() {
    this._cursoService.getCursos(this.token).subscribe(
      response => {
        if (response.status == 'success') {
          this.cursos = response.cursos;
        }
      },
      error => {
        console.log(error);
      }
    );
    this.curso1 = new Curso(1, 'Sistemas de Información', 'ICC475');
    this.cursos = [this.curso1];
  }

}
