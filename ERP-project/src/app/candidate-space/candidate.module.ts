import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
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
    component: OffresListComponent,
  },
  {
    path: 'home/:id/offre',
    component: PostulerComponent,
  },
];

@NgModule({
  declarations: [HomeComponent, OffresListComponent, PostulerComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule.forChild(candidateRoutes),
  ],
  exports: [],
})
export class CandidateModule {}
