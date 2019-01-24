import { Routes } from '@angular/router';

import { DashboardComponent } from '../../dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { ProfesorListComponent } from '../../profesor/profesor-list/profesor-list.component';
import { ProfesorNewComponent } from '../../profesor/profesor-new/profesor-new.component';
import { ProfesorEditComponent } from '../../profesor/profesor-edit/profesor-edit.component';
import { CursoListComponent } from '../../curso/curso-list/curso-list.component';
import { CursoEditComponent } from '../../curso/curso-edit/curso-edit.component';
import { CursoNewComponent } from '../../curso/curso-new/curso-new.component';
import { CursoDetailComponent } from '../../curso/curso-detail/curso-detail.component';
import { ProductoListComponent } from '../../producto/producto-list/producto-list.component';
import { ProductoNewComponent } from '../../producto/producto-new/producto-new.component';
import { ProductoEditComponent } from '../../producto/producto-edit/producto-edit.component';
import { AlumnoListComponent } from '../../alumno/alumno-list/alumno-list.component';
import { AlumnoNewComponent } from '../../alumno/alumno-new/alumno-new.component';
import { AlumnoEditComponent } from '../../alumno/alumno-edit/alumno-edit.component';

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
];
