import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';


import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';

import { AppComponent } from './app.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ProfesorComponent } from './profesor/profesor.component';
import { CursoComponent } from './curso/curso.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { ProductoComponent } from './producto/producto.component';
import { ProfesorNewComponent } from './profesor-new/profesor-new.component';
import { ProfesorEditComponent } from './profesor-edit/profesor-edit.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';

import {
  AgmCoreModule
} from '@agm/core';
import { CursoDetailComponent } from './curso-detail/curso-detail.component';
import { ProductoNewComponent } from './producto-new/producto-new.component';
import { CursoEditComponent } from './curso-edit/curso-edit.component';
import { ProductoEditComponent } from './producto-edit/producto-edit.component';
import { AlumnoNewComponent } from './alumno-new/alumno-new.component';
import { AlumnoEditComponent } from './alumno-edit/alumno-edit.component';
import { CursoNewComponent } from './curso-new/curso-new.component';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    ComponentsModule,
    RouterModule,
    AppRoutingModule,
    AgmCoreModule.forRoot({
      apiKey: 'YOUR_GOOGLE_MAPS_API_KEY'
    })
  ],
  declarations: [
    AppComponent,
    AdminLayoutComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
