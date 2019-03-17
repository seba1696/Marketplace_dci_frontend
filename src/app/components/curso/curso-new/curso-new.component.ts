import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Curso } from 'app/models/curso';
import { CursoService } from 'app/service/curso.service';
import { Validators, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ProfesorService } from 'app/service/profesor.service';

@Component({
  selector: 'app-curso-new',
  templateUrl: './curso-new.component.html',
  styleUrls: ['./curso-new.component.scss'],
  providers: [UserService, CursoService, ProfesorService]
})
export class CursoNewComponent implements OnInit {

  public identity;
  public token;
  public body;
  public curso: Curso;
  cursoForm: FormGroup;
  requestForm = new FormControl('', [Validators.required]);
  public profesores: Array<any>;

  constructor(
    private _userService: UserService,
    private _cursoService: CursoService,
    private _formBuilder: FormBuilder,
    private _profesorService: ProfesorService
  ) {
    // this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.cursoForm = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
      profesor: ['', [Validators.required]]
    });
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

  onSubmit() {
    let curso: any = {};
    curso.nombre = this.cursoForm.get('nombre').value;
    curso.codigo = this.cursoForm.get('codigo').value;
    this._cursoService.create(this.token, curso).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.curso = this.body.curso;
          let request: any = {};
          request.run = this.cursoForm.get('profesor').value;
          console.log(request.run);
          request.codigo = this.cursoForm.get('codigo').value;
          this._cursoService.addProfesor(this.token, request).subscribe(
            response => {
              console.log(response);
            },
            error => {
              console.log(<any>error);
            }
          )
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
