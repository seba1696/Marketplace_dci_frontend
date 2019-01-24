import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Alumno } from 'app/models/alumno';
import { User } from 'app/models/user';

@Component({
  selector: 'app-alumno-new',
  templateUrl: './alumno-new.component.html',
  styleUrls: ['./alumno-new.component.scss'],
  providers: [UserService]
})
export class AlumnoNewComponent implements OnInit {

  public identity;
  public token;
  public user: User;
  public alumno: Alumno;

  constructor(//private _route: ActivatedRoute,
    //private _router: Router,
    //private _userService: UserService
  ) {
    // this.identity = this._userService.getIdentity();
    // this.token = this._userService.getToken();
  }

  ngOnInit() {
    /*if (this.identity == null) {
       this._router.navigate(['login']);
     } else {
       //Crear objeto alumno
       this.user = new User(0, '', '', 3);
       this.alumno = new Alumno(0, '', '',0,'','', this.user.idRol);
     }*/
  }
  onSubmit(form) {
    console.log(this.alumno);
  }

}
