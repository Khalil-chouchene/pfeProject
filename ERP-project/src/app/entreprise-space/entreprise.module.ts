import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

import { AllCandidatsComponent } from '../offres-list/all-candidats/all-candidats.component';
import { MyOffresComponent } from '../offres-list/my-offres/my-offres.component';
import { ProfilComponent } from '../offres-list/profil/profil.component';
import { FormulaireOffreComponent } from './formulaire-offre/formulaire-offre.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';

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
    children: [
      {
        path: ':id/profil',
        component: ProfilComponent,
      },
    ],
  },
];

@NgModule({
  declarations: [
    MyOffresComponent,
    FormulaireOffreComponent,
    AllCandidatsComponent,
    ProfilComponent,
  ],
  imports: [
    CommonModule,
    TooltipModule,
    ReactiveFormsModule,
    RouterModule.forChild(entrepriseRoutes),
    PdfViewerModule,
  ],
})
export class EntrepriseModule {}
