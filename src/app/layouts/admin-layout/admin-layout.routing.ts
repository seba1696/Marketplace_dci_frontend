import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../components/user-profile/user-profile.component';
import { ProfesorListComponent } from '../../components/profesor/profesor-list/profesor-list.component';
import { ProfesorNewComponent } from '../../components/profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from '../../components/profesor/profesor-edit/profesor-edit.component';
import { CursoListComponent } from '../../components/curso/curso-list/curso-list.component';
import { CursoEditComponent } from '../../components/curso/curso-edit/curso-edit.component';
import { CursoNewComponent } from '../../components/curso/curso-new/curso-new.component';
import { CursoDetailComponent } from '../../components/curso/curso-detail/curso-detail.component';
import { ProductoListComponent } from '../../components/producto/producto-list/producto-list.component';
import { ProductoNewComponent } from '../../components/producto/producto-new/producto-new.component';
import { ProductoEditComponent } from '../../components/producto/producto-edit/producto-edit.component';
import { AlumnoListComponent } from '../../components/alumno/alumno-list/alumno-list.component';
import { AlumnoNewComponent } from '../../components/alumno/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../components/alumno/alumno-edit/alumno-edit.component';
import { LoginComponent } from '../../components/login/login.component';

export const AdminLayoutRoutes: Routes = [
    // {
    //   path: '',
    //   children: [ {
    //     path: 'dashboard',
    //     component: DashboardComponent
    // }]}, {
    // path: '',
    // children: [ {
    //   path: 'userprofile',
    //   component: UserProfileComponent
    // }]
    // }, {
    //   path: '',
    //   children: [ {
    //     path: 'icons',
    //     component: IconsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'notifications',
    //         component: NotificationsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'maps',
    //         component: MapsComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'typography',
    //         component: TypographyComponent
    //     }]
    // }, {
    //     path: '',
    //     children: [ {
    //         path: 'upgrade',
    //         component: UpgradeComponent
    //     }]
    // }
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'profesor', component: ProfesorListComponent },
    { path: 'profesor/profesor-nuevo', component: ProfesorNewComponent },
    { path: 'profesor/profesor-edit', component: ProfesorEditComponent },
    { path: 'curso', component: CursoListComponent },
    { path: 'curso/curso-new', component: CursoNewComponent },
    { path: 'curso/curso-detail', component: CursoDetailComponent },
    { path: 'curso/curso-detail/curso-edit', component: CursoEditComponent },
    { path: 'producto', component: ProductoListComponent },
    { path: 'curso/curso-detail/producto-new', component: ProductoNewComponent },
    { path: 'curso/curso-detail/producto-edit', component: ProductoEditComponent },
    { path: 'curso/curso-detail/alumno-new', component: AlumnoNewComponent },
    { path: 'curso/curso-detail/alumno-edit', component: AlumnoEditComponent },
    { path: 'alumno-list', component: AlumnoListComponent },
    { path: '', component: LoginComponent },
    { path: 'login', component: LoginComponent },
];
