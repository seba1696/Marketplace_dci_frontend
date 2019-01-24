import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Curso } from 'app/models/curso';

@Component({
  selector: 'app-curso-new',
  templateUrl: './curso-new.component.html',
  styleUrls: ['./curso-new.component.scss'],
  providers: [UserService]
})
export class CursoNewComponent implements OnInit {

  public identity;
  public token;
  public curso: Curso;

  constructor(//private _route: ActivatedRoute,
    //private _router: Router,
    //private _userService: UserService
  ) {
    // this.identity = this._userService.getIdentity();
    // this.token = this._userService.getToken();) 
  }

  ngOnInit() {
    /*if (this.identity == null) {
      this._router.navigate(['login']);
    } else {
      //Crear objeto curso
      this.curso= new Curso(0,'','');      
    }*/
  }

  onSubmit(form) {
    console.log(this.curso);
  }

}
