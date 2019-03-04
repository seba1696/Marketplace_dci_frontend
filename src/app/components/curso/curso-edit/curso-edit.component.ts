import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../models/curso';
import { CursoService } from '../../../service/curso.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-curso-edit',
  templateUrl: './curso-edit.component.html',
  styleUrls: ['./curso-edit.component.scss']
  //, providers: [CursoService]
})
export class CursoEditComponent implements OnInit {

  public curso: Curso;
  public token;
  public status_curso;

  constructor(
    /*private _cursoService: CursoService,
    private _route: ActivatedRoute,
    private _router: Router*/
  ) {
    //this.token = this._userService.getToken();
  }

  ngOnInit() {
    /*this._route.params.subscribe(params => {
     let id = +params['id'];
        this.getCurso(id)
    });*/ 
    this.curso = new Curso(1, 'Sistemas de Información', 'ICC475');
  }

  getCurso(id) {
    /*this._cursoService.getCurso(id).subscribe(
      response => {
        if (response.status == 'success') {
          this.curso = response.curso;
        } else {
          this._router.navigate(['curso']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );*/
  }

  onSubmit(form) {
    /*console.log(this.curso.id);
    this._cursoService.update(this.token, this.curso, this.curso.id).subscribe(
      response => {
        if (response.status == 'success') {
          this.status_curso = 'success';
          this.curso = response.curso;
        } else {
          this.status_curso = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.status_curso = 'error';
      }
    );*/
  }

}
