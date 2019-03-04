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
  public alumno: Alumno;

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
    this.alumno = new Alumno(1, 'nombre1', '1111111111', 0, '1555', 'email@email.com', 3);
    this.alumnos = [this.alumno];
  }

}
