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
    console.log(this.token);
  }

  ngOnInit() {
    this._route.params.subscribe(params => {
      let id = +params['id'];
      this.getProfesor(id)
    });
    this.profesorForm = this._formBuilder.group({
      run: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  getProfesor(id) {
    console.log(id);
    this._profesorService.getProfesor(this.token, id).subscribe(
      response => {
        if (response.status == 'success') {
          this.profesor = response.profesor;
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
        if (response.status == 'success') {
          this.usuario = response.usuario;
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
    console.log(this.profesor);
    let profesor: any = {};
    profesor.run = this.profesorForm.get('run').value;
    profesor.pass = this.profesorForm.get('pass').value;
    profesor.nombre = this.profesorForm.get('nombre').value;
    profesor.email = this.profesorForm.get('email').value;
    console.log(profesor);
    this._profesorService.update(this.token, profesor).subscribe(
      response => {
        if (response.status == 'success') {
          this.status_profesor = 'success';
          this.profesor = response.profesor;
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

}
