import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { Producto } from 'app/models/producto';

@Component({
  selector: 'app-producto-new',
  templateUrl: './producto-new.component.html',
  styleUrls: ['./producto-new.component.scss'],
  providers: [UserService]
})
export class ProductoNewComponent implements OnInit {

  public identity;
  public token;
  public producto: Producto;

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
      //Crear objeto producto
      this.producto = new Producto(0,'','',0,'');            
    }*/
  }

  onSubmit(form) {
    console.log(this.producto);
  }

}
