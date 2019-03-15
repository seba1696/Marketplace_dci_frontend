import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { User } from '../../../models/user';
import { ProfesorService } from '../../../service/profesor.service';
import { UserService } from '../../../service/user.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.component.html',
  styleUrls: ['./profesor-edit.component.scss']
  , providers: [UserService, ProfesorService]
})
export class ProfesorEditComponent implements OnInit {

  public profesor: Profesor;
  public usuario: User;
  public token;
  public id;
  public body;
  public status_profesor;
  profesorForm: FormGroup;

  constructor(
    private _profesorService: ProfesorService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {
    this.usuario = new User(0, '', '', 2);
    this.profesor = new Profesor(0, '', '', this.usuario.idRol);
    this.token = this._userService.getToken();
    this.id = this._profesorService.getId();
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getProfesor();
    });
    this.profesorForm = this._formBuilder.group({
      run: [this.usuario.run, [Validators.required]],
      pass: [this.usuario.pass, [Validators.required]],
      nombre: [this.profesor.nombre, [Validators.required]],
      email: [this.profesor.email, [Validators.required]]
    })
  }

  getProfesor() {
    this._profesorService.getProfesor(this.token, this.id).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.profesor = this.body.profesores;
          this.getUsuario(this.profesor.UsuarioidUsuario);
        } else {
          this._router.navigate(['profesor']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  getUsuario(id) {
    this._userService.getUsuario(this.token, id).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.body = JSON.parse(response._body);
          this.usuario = this.body.usuario;
        } else {
          this._router.navigate(['profesor']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );
  }

  onSubmit() {
    this.destroyId();
    let profesor: any = {};
    profesor.profesor = this.usuario.run;
    profesor.run = this.profesorForm.get('run').value;
    profesor.pass = this.profesorForm.get('pass').value;
    profesor.nombre = this.profesorForm.get('nombre').value;
    profesor.email = this.profesorForm.get('email').value;
    this._profesorService.update(this.token, profesor).subscribe(
      response => {
        if (response.statusText == 'OK') {
          this.status_profesor = 'success';
          this.body = JSON.parse(response._body);
          this.profesor = this.body.profesores;
        } else {
          this.status_profesor = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.status_profesor = 'error';
      }
    );
  }

  destroyId() {
    localStorage.removeItem('id');
  }

}
