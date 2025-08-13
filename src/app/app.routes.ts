import { Routes } from '@angular/router';
import { HomeHomeComponent } from './home-home/home-home.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ProjectHomeComponent } from './project-home/project-home.component';

export const routes: Routes = [
  { path: 'home', component: HomeHomeComponent },
  { path: 'contact', component: ContactHomeComponent },
  { path: 'project', component: ProjectHomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];
