import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { UserService } from 'app/service/user.service';
import { User } from 'app/models/user';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-new',
  templateUrl: './admin-new.component.html',
  styleUrls: ['./admin-new.component.scss'],
  providers: [UserService]
})
export class AdminNewComponent implements OnInit {

  public token;
  public user: User;
  adminForm: FormGroup;
  public admin_status = 'error';
  public body: any;
  public msj;
  public status;

  constructor(
    private _route: ActivatedRoute,
    private _router: Router,
    private _userService: UserService,
    private _formBuilder: FormBuilder
  ) {
    this.token = this._userService.getToken();
  }

  ngOnInit() {
    this.adminForm = this._formBuilder.group({
      run: ['', [Validators.required]],
      pass: ['', [Validators.required]]
    })
  }

  onSubmit() {
    let admin: any = {};
    admin.run = this.adminForm.get('run').value;
    admin.pass = this.adminForm.get('pass').value;
    this._userService.create(this.token, admin).subscribe(
      response => {
        this.body = JSON.parse(response._body);
        console.log(this.body);
        this.status = this.body.status;
        if (this.status == 'success') {
          this.admin_status = 'ok';
        } else {
          this.msj = this.body.message;
          this.admin_status = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.admin_status = 'error';
      }
    );
  }

}
