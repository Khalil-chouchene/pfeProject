import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { RouterModule, Routes } from '@angular/router';
import { PostulerComponent } from './postuler/postuler.component';
import { OffresListComponent } from './offres-list/offres-list.component';

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

@NgModule({
  declarations: [HomeComponent, OffresListComponent, PostulerComponent],
  imports: [CommonModule, SharedModule, RouterModule.forChild(candidateRoutes)],
  exports: [],
})
export class CandidateModule {}
