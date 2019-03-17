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
  public body;
  public status;
  public user: User;
  public profesor: Profesor;
  public status_profesor:boolean = true;
  public msj;
  profesorForm: FormGroup;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _profesorService: ProfesorService,
    private _formBuilder: FormBuilder
  ) {
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.profesorForm = this._formBuilder.group({
      run: ['', [Validators.required]],
      pass: ['', [Validators.required]],
      nombre: ['', [Validators.required]],
      email: ['', [Validators.required]]
    })
  }

  onSubmit() {
    let profesor: any = {};
    profesor.run = this.profesorForm.get('run').value;
    profesor.pass = this.profesorForm.get('pass').value;
    profesor.nombre = this.profesorForm.get('nombre').value;
    profesor.email = this.profesorForm.get('email').value;
    this._profesorService.create(this.token, profesor).subscribe(
      response => {
        this.body = JSON.parse(response._body);
        this.status = this.body.status;
        if (this.status == 'success') {
          this.msj = this.body.message;
          this.status_profesor = true;
          console.log(this.status_profesor);
        } else {
          this.msj = this.body.message;
          this.status_profesor = false;
        }
      },
      error => {
        console.log(<any>error);
        this.status_profesor = false;
      }
    );
  }

}
