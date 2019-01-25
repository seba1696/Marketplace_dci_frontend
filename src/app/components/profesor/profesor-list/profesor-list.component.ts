import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
//import { ProfesorService } from '../../../service/profesor.service';

@Component({
  selector: 'app-profesor-list',
  templateUrl: './profesor-list.component.html',
  styleUrls: ['./profesor-list.component.scss']
  //,providers:[ProfesorService]
})
export class ProfesorListComponent implements OnInit {

  public profesores: Array<Profesor>;

  constructor(
    // private _profesorService: ProfesorService
  ) { }

  ngOnInit() {
    /*this._profesorService.getProfesores().subscribe(
      response => {
        if (response.status == 'success') {
          this.profesores = response.profesores;
        }
      },
      error => {
        console.log(error);
      }
    );*/
  }

}
