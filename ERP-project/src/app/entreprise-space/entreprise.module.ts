import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AllCandidatsComponent } from './all-candidats/all-candidats.component';
import { MyOffresComponent } from './my-offres/my-offres.component';
import { ProfilComponent } from './profil/profil.component';
import { FormulaireOffreComponent } from './formulaire-offre/formulaire-offre.component';

import { SharedModule } from '../shared';
const entrepriseRoutes: Routes = [
  {
    path: '',
    redirectTo: 'myOffres',
    pathMatch: 'full',
  },
  {
    path: 'myOffres',
    component: MyOffresComponent,
  },
  {
    path: 'myOffres/formulaire',
    component: FormulaireOffreComponent,
  },
  {
    path: 'myOffres/:id',
    component: AllCandidatsComponent,
  },
  {
    path: 'myOffres/:id/profil/:profilId',
    component: ProfilComponent,
  },
];

@NgModule({
  declarations: [
    FormulaireOffreComponent,
    ProfilComponent,
    AllCandidatsComponent,
    MyOffresComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(entrepriseRoutes),
  ],
  exports: [],
})
export class EntrepriseModule {}
