import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../models/curso';
//import { CursoService } from '../../../service/curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.scss']
  //,providers:[CursoService]
})
export class CursoListComponent implements OnInit {

  public cursos: Array<Curso>;
  public curso1;

  constructor(
    //private _cursoService: CursoService
  ) {
    //this.token=this._userService.getToken();

  }

  ngOnInit() {
    /*this._cursoService.getCursos().subscribe(
      response => {
        if (response.status == 'success') {
          this.cursos = response.cursos;
        }
      },
      error => {
        console.log(error);
      }
    );*/
    this.curso1 = new Curso(1, 'Sistemas de Información', 'ICC475');
    this.cursos = [this.curso1];
  }

}
