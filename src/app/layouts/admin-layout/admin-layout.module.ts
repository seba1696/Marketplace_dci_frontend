import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { ProfesorListComponent } from '../../components/profesor/profesor-list/profesor-list.component';
import { ProfesorNewComponent } from '../../components/profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from '../../components/profesor/profesor-edit/profesor-edit.component';
import { CursoListComponent } from '../../components/curso/curso-list/curso-list.component';
import { CursoNewComponent } from '../../components/curso/curso-new/curso-new.component';
import { CursoEditComponent } from '../../components/curso/curso-edit/curso-edit.component';
import { CursoDetailComponent } from '../../components/curso/curso-detail/curso-detail.component';
import { ProductoListComponent } from '../../components/producto/producto-list/producto-list.component';
import { ProductoNewComponent } from '../../components/producto/producto-new/producto-new.component';
import { ProductoEditComponent } from '../../components/producto/producto-edit/producto-edit.component';
import { AlumnoListComponent } from '../../components/alumno/alumno-list/alumno-list.component';
import { AlumnoNewComponent } from '../../components/alumno/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../components/alumno/alumno-edit/alumno-edit.component';
import { LoginComponent } from '../../components/login/login.component';

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
    ReactiveFormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule,
  ],
  declarations: [
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
    LoginComponent
  ]
})

export class AdminLayoutModule { }
