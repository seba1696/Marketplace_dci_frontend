import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Curso } from 'app/models/curso';
import { CursoService } from 'app/service/curso.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-curso-new',
  templateUrl: './curso-new.component.html',
  styleUrls: ['./curso-new.component.scss'],
  providers: [UserService, CursoService]
})
export class CursoNewComponent implements OnInit {

  public identity;
  public token;
  public body;
  public curso: Curso;
  cursoForm: FormGroup;

  constructor(
    private _userService: UserService,
    private _cursoService: CursoService,
    private _formBuilder: FormBuilder
  ) {
    // this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.cursoForm = this._formBuilder.group({
      nombre: ['', [Validators.required]],
      codigo: ['', [Validators.required]],
    })
  }

  onSubmit() {
    let curso: any = {};
    curso.nombre = this.cursoForm.get('nombre').value;
    curso.codigo = this.cursoForm.get('codigo').value;
    console.log(curso);
    console.log(this.token);
    this._cursoService.create(this.token, curso).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.curso = this.body.curso;
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
