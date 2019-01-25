import { Component, OnInit } from '@angular/core';
import { Curso } from '../../../models/curso';
//import { UserService } from 'app/service/user.service';
//import { CursoService } from '../../../service/curso.service';
//import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.scss']
  //, providers: [CursoService]
})
export class CursoDetailComponent implements OnInit {

  public curso: Curso;
  public token;

  constructor(
    /*private _cursoService: CursoService,
    private _route: ActivatedRoute,
    private _router: Router*/
    //private _userService : UserService
  ) {
    //this.token=this._userService.getToken();
  }

  ngOnInit() {
    //this.getCurso();
    this.curso = new Curso(1, 'Sistemas de Información', 'ICC475');
  }

  getCurso(id) {
    /*this._route.params.subscribe(params => {
      let id = +params['id'];
      this._cursoService.getCurso(id).subscribe(
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
      );
    });*/
  }

  deleteCurso(id) {
    /*this._cursoService.delete(this.token, id).subscribe(
      response => {
        //this._router.navigate['curso'];
      },
      error => {
        console.log(<any>error);
      }
    );*/
  }

}
