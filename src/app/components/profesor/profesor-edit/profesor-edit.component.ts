import { Component, OnInit } from '@angular/core';
import { Profesor } from '../../../models/profesor';
import { ProfesorService } from '../../../service/profesor.service';

@Component({
  selector: 'app-profesor-edit',
  templateUrl: './profesor-edit.component.html',
  styleUrls: ['./profesor-edit.component.scss']
  , providers: [ProfesorService]
})
export class ProfesorEditComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
