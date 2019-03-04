import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Profesor } from 'app/models/profesor';
import { User } from 'app/models/user';

@Component({
  selector: 'app-profesor-new',
  templateUrl: './profesor-new.component.html',
  styleUrls: ['./profesor-new.component.scss'],
  providers: [UserService]
})
export class ProfesorNewComponent implements OnInit {

  public identity;
  public token;
  public user: User;
  public profesor: Profesor;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService
  ) {
    this.identity = this._userService.getIdentity();
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    if (this.identity == null) {
      this._router.navigate(['login']);
    } else {
      //Crear objeto profesor
      this.user = new User(0, '', '', 2);
      this.profesor = new Profesor(0, '', '', this.user.idRol);
    }
  }

  onSubmit(form) {
    console.log(this.profesor);
  }

}
