import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
import { UserService } from '../../service/user.service';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [UserService]
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(
    /*private _userService: UserService,
    private _route: ActivatedRoute,
    private _router: Router*/
  ) {
    //this.user = new User(0, '', '', 0);
  }

  ngOnInit() {
    console.log('kkk');
  }

  onSubmit(form) {
    /*console.log(this.user);
    this._userService.loginUsuario(this.user).subscribe(
      response => {
        //Token
        console.log(response);
      },
      error => {
        console.log(<any>error);
      }
    );*/
  }

}
