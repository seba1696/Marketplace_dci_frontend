import { Component, OnInit } from '@angular/core';
import { Alumno } from '../../../models/alumno';
//import { AlumnoService } from '../../../service/alumno.service';

@Component({
  selector: 'app-alumno-list',
  templateUrl: './alumno-list.component.html',
  styleUrls: ['./alumno-list.component.scss']
  //,providers:[AlumnoService]
})
export class AlumnoListComponent implements OnInit {

  public alumnos: Array<Alumno>;

  constructor(
    //private _alumnoService: AlumnoService
  ) { }

  ngOnInit() {
    /*this._alumnoService.getAlumnos().subscribe(
      response => {
        if (response.status == 'success') {
          this.alumnos = response.alumnos;
        }
      },
      error => {
        console.log(error);
      }
    );*/
  }

}
