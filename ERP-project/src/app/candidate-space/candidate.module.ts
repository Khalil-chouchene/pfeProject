import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { SharedModule } from '../shared';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { PostulerComponent } from './postuler/postuler.component';
import { OffresListComponent } from './offres-list/offres-list.component';
// primeng components
import { TooltipModule } from 'primeng/tooltip';

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
