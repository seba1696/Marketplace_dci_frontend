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

  constructor(
    private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router,
    private _formBuilder: FormBuilder
  ) {
    //this.user = new User(0,'','',0);
    console.log(this.user);
  }

  ngOnInit() {
    this.loginForm = this._formBuilder.group({
      run: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }

  onSubmit() {
    console.log(this.user);
    let usuario: any = {};
    usuario.run = this.loginForm.get('run').value;
    usuario.pass = this.loginForm.get('pass').value;
    console.log(usuario);
    this._userService.loginUsuario(usuario).subscribe(
      response => {
        //Token
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );
  }

}
