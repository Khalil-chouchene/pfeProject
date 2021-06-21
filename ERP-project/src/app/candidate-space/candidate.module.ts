import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostulerComponent } from './postuler/postuler.component';
import { OffresListComponent } from './offres-list/offres-list.component';
// primeng components
import { TooltipModule } from 'primeng/tooltip';
import { LoginComponent } from '../entreprise-space/login/login.component';

const candidateRoutes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'offres',
    component: OffresListComponent,
  },
  {
    path: 'offres/:id',
    component: PostulerComponent,
  },
];

/* const candidateRoutes: Routes = [
  {
    path: '',
    redirectTo: 'offres',
    pathMatch: 'full',
  },
  {
    path: 'offres',
    component: OffresListComponent,
  },
  {
    path: 'offres/:id',
    component: PostulerComponent,
  },
  { path: 'offres/login', component: LoginComponent },
]; */

@NgModule({
  declarations: [HomeComponent, OffresListComponent, PostulerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    TooltipModule,
    SharedModule,
    RouterModule.forChild(candidateRoutes),
  ],
  exports: [],
})
export class CandidateModule {}
