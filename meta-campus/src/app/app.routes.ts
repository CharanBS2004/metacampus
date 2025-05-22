import { Routes } from '@angular/router';
import { DashboardComponent } from './student-management/dashboard/dashboard.component';
import { AcademicsComponent } from './student-management/academics/academics.component';
import { AdministrationComponent } from './student-management/administration/administration.component';
import { CommunicationComponent } from './student-management/communication/communication.component';
import { LibraryComponent } from './student-management/library/library.component';
import { CampusLifeComponent } from './student-management/campus-life/campus-life.component';
import { SupportComponent } from './student-management/support/support.component';

export const routes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'academics', component: AcademicsComponent },
    { path: 'administration', component: AdministrationComponent },
    { path: 'communication', component: CommunicationComponent },
    { path: 'library', component: LibraryComponent },
    { path: 'campus-life', component: CampusLifeComponent },
    { path: 'support', component: SupportComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: '**', redirectTo: 'dashboard' }
];