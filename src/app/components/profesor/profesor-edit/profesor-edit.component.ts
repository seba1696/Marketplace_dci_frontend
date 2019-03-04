import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.component.html',
  styleUrls: ['./profesor-edit.component.scss']
  , providers: [ProfesorService]
})
export class ProfesorEditComponent implements OnInit {

  public profesor: Profesor;
  public token;
  public status_profesor;

  constructor(
    /*private _profesorService: ProfesorService,
    private _route: ActivatedRoute,
    private _router: Router*/
  ) {
    //this.token = this._userService.getToken();
  }

  ngOnInit() {
    /*this._route.params.subscribe(params => {
     let id = +params['id'];
        this.getProfesor(id)
    });*/
  }

  getProfesor(id) {
    /*this._profesorService.getProfesor(id).subscribe(
      response => {
        if (response.status == 'success') {
          this.profesor = response.profesor;
        } else {
          this._router.navigate(['profesor']);
        }
      },
      error => {
        console.log(<any>error);
      }
    );*/
  }

  onSubmit(form) {
    /*console.log(this.profesor.id);
    this._profesorService.update(this.token, this.profesor, this.profesor.id).subscribe(
      response => {
        if (response.status == 'success') {
          this.status_profesor = 'success';
          this.profesor = response.profesor;
        } else {
          this.status_profesor = 'error';
        }
      },
      error => {
        console.log(<any>error);
        this.status_profesor = 'error';
      }
    );*/
  }

}
