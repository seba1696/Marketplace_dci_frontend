import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Profesor } from 'app/models/profesor';
import { User } from 'app/models/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { ProfesorService } from 'app/service/profesor.service';

@Component({
  selector: 'app-profesor-new',
  templateUrl: './profesor-new.component.html',
  styleUrls: ['./profesor-new.component.scss'],
  providers: [UserService, ProfesorService]
})
export class ProfesorNewComponent implements OnInit {

  public identity;
  public token;
  public user: User;
  public profesor: Profesor;
  public status_profesor;
  profesorForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _profesorService: ProfesorService,
    private _formBuilder: FormBuilder
  ) {
    //this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.profesorForm = this._formBuilder.group({
      run: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
    //Crear objeto profesor
    this.user = new User(0, '', '', 2);
    this.profesor = new Profesor(0, '', '', this.user.idRol);
  }

  onSubmit() {
    let profesor: any = {};
    profesor.run = this.profesorForm.get('run').value;
    profesor.pass = this.profesorForm.get('pass').value;
    profesor.nombre = this.profesorForm.get('nombre').value;
    profesor.email = this.profesorForm.get('email').value;
    console.log(profesor);
    console.log(this.token);
    this._profesorService.create(this.token, profesor).subscribe(
      response => {
        if (response.status == 'success') {
          this.status_profesor = 'success';
          this.profesor = response.profesor;
        } else {
          this.status_profesor = 'error';
        }
        console.log(response);
      },
      error => {
        console.log(<any>error);
        this.status_profesor = 'error';
      }
    );
  }

}
