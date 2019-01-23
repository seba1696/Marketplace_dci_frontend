import { Routes } from '@angular/router';

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
    //{ path: 'alumno', component: AlumnoComponent },
    //{ path: 'producto', component: ProductoComponent },
    { path: 'profesor', component: ProfesorComponent },
    { path: 'profesor/profesor-nuevo', component: ProfesorNewComponent },
    { path: 'profesor/profesor-edit', component: ProfesorEditComponent },
    { path: 'curso', component: CursoComponent },
    { path: 'curso/curso-new', component: CursoNewComponent },
    { path: 'curso/curso-detail', component: CursoDetailComponent },
    { path: 'curso/curso-detail/curso-edit', component: CursoEditComponent },
    { path: 'curso/curso-detail/producto-new', component: ProductoNewComponent },
    { path: 'curso/curso-detail/producto-edit', component: ProductoEditComponent },
    { path: 'curso/curso-detail/alumno-new', component: AlumnoNewComponent },
    { path: 'curso/curso-detail/alumno-edit', component: AlumnoEditComponent },
];
