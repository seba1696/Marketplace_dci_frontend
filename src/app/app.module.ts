import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { AlumnoListComponent } from './alumno/alumno-list/alumno-list.component';
import { AlumnoNewComponent } from './alumno/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from './alumno/alumno-edit/alumno-edit.component';
import { CursoNewComponent } from './curso/curso-new/curso-new.component';
import { CursoListComponent } from './curso/curso-list/curso-list.component';
import { CursoEditComponent } from './curso/curso-edit/curso-edit.component';
import { CursoDetailComponent } from './curso/curso-detail/curso-detail.component';
import { ProfesorListComponent } from './profesor/profesor-list/profesor-list.component';
import { ProfesorNewComponent } from './profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from './profesor/profesor-edit/profesor-edit.component';
import { ProductoNewComponent } from './producto/producto-new/producto-new.component';
import { ProductoEditComponent } from './producto/producto-edit/producto-edit.component';
import { ProductoListComponent } from './producto/producto-list/producto-list.component';
import {
  AgmCoreModule
} from '@agm/core';

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
