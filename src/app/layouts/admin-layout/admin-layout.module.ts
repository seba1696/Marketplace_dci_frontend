import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AdminLayoutRoutes } from './admin-layout.routing';
import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ProfesorComponent } from '../../profesor/profesor.component';
import { CursoComponent } from '../../curso/curso.component';
import { AlumnoComponent } from '../../alumno/alumno.component';
import { ProductoComponent } from '../../producto/producto.component';
import { ProfesorNewComponent } from '../../profesor-new/profesor-new.component';
import { ProfesorEditComponent } from '../../profesor-edit/profesor-edit.component';
import { CursoDetailComponent } from '../../curso-detail/curso-detail.component';
import { ProductoNewComponent } from '../../producto-new/producto-new.component';
import { CursoEditComponent } from '../../curso-edit/curso-edit.component';
import { ProductoEditComponent } from '../../producto-edit/producto-edit.component';
import { AlumnoNewComponent } from '../../alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../alumno-edit/alumno-edit.component';
import { CursoNewComponent } from '../../curso-new/curso-new.component';

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
    ProfesorComponent,
    CursoComponent,
    CursoNewComponent,
    CursoDetailComponent,
    CursoEditComponent,
    AlumnoComponent,
    ProductoComponent,
    ProfesorNewComponent,
    ProfesorEditComponent,
    ProductoNewComponent,
    ProductoEditComponent,
    AlumnoNewComponent,
    AlumnoEditComponent,
  ]
})

export class AdminLayoutModule { }
