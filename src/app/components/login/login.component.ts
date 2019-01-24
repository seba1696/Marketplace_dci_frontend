import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { User } from '../../models/user';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public user: User;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
    this.user = new User(0, '', '');
  }

  ngOnInit() {
    console.log('kkk');
  }

  onSubmit(form) {
    console.log(this.user);
  }

}
