import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ProfesorListComponent } from '../../profesor/profesor-list/profesor-list.component';
import { ProfesorNewComponent } from '../../profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from '../../profesor/profesor-edit/profesor-edit.component';
import { CursoListComponent } from '../../curso/curso-list/curso-list.component';
import { CursoNewComponent } from '../../curso/curso-new/curso-new.component';
import { CursoEditComponent } from '../../curso/curso-edit/curso-edit.component';
import { CursoDetailComponent } from '../../curso/curso-detail/curso-detail.component';
import { ProductoListComponent } from '../../producto/producto-list/producto-list.component';
import { ProductoNewComponent } from '../../producto/producto-new/producto-new.component';
import { ProductoEditComponent } from '../../producto/producto-edit/producto-edit.component';
import { AlumnoListComponent } from '../../alumno/alumno-list/alumno-list.component';
import { AlumnoNewComponent } from '../../alumno/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../alumno/alumno-edit/alumno-edit.component';


import {
  MatButtonModule,
  MatInputModule,
  MatRippleModule,
  MatFormFieldModule,
  MatTooltipModule,
  MatSelectModule
} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(AdminLayoutRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
    DashboardComponent,
    UserProfileComponent,
    CursoListComponent,
    CursoNewComponent,
    CursoDetailComponent,
    CursoEditComponent,
    ProductoListComponent,
    ProductoNewComponent,
    ProductoEditComponent,
    ProfesorListComponent,
    ProfesorNewComponent,
    ProfesorEditComponent,
    AlumnoListComponent,
    AlumnoNewComponent,
    AlumnoEditComponent,
  ]
})

export class AdminLayoutModule { }
