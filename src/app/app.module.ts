import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app.routing';
import { ComponentsModule } from './components/components.module';
import { AppComponent } from './app.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { AlumnoListComponent } from './components/alumno/alumno-list/alumno-list.component';
import { AlumnoNewComponent } from './components/alumno/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from './components/alumno/alumno-edit/alumno-edit.component';
import { CursoNewComponent } from './components/curso/curso-new/curso-new.component';
import { CursoListComponent } from './components/curso/curso-list/curso-list.component';
import { CursoEditComponent } from './components/curso/curso-edit/curso-edit.component';
import { CursoDetailComponent } from './components/curso/curso-detail/curso-detail.component';
import { ProfesorListComponent } from './components/profesor/profesor-list/profesor-list.component';
import { ProfesorNewComponent } from './components/profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from './components/profesor/profesor-edit/profesor-edit.component';
import { ProductoNewComponent } from './components/producto/producto-new/producto-new.component';
import { ProductoEditComponent } from './components/producto/producto-edit/producto-edit.component';
import { ProductoListComponent } from './components/producto/producto-list/producto-list.component';
import { LoginComponent } from './components/login/login.component';
import {
  AgmCoreModule
} from '@agm/core';
import { CursoService } from './service/curso.service';
import { UserService } from './service/user.service';
import { ProfesorService } from './service/profesor.service';

@NgModule({
  imports: [
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
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
  providers: [CursoService, UserService, ProfesorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
