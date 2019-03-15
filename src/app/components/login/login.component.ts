import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;
  loginForm: FormGroup;
  public token;
  //public identity;

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    this.user = new User(0, '', '', 0);
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      run: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }

  onSubmit() {
    let usuario: any = {};
    usuario.run = this.loginForm.get('run').value;
    usuario.pass = this.loginForm.get('pass').value;
    this._userService.loginUsuario(usuario).subscribe(
      response => {
        //Token
        this.token = response._body;
        localStorage.setItem('token', this.token);
        /*this._userService.loginUsuario(usuario, true).subscribe(
          response => {
            this.identity = response;
            localStorage.setItem('identity', JSON.stringify(this.identity));
          },
          error => {
            console.log(<any>error);
          }
        );*/
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
