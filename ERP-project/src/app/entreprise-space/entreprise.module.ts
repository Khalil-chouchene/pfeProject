import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TooltipModule } from 'primeng/tooltip';

import { AllCandidatsComponent } from './all-candidats/all-candidats.component';
import { MyOffresComponent } from './my-offres/my-offres.component';
import { ProfilComponent } from './profil/profil.component';
import { FormulaireOffreComponent } from './formulaire-offre/formulaire-offre.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';

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
    TooltipModule,
    ReactiveFormsModule,
    RouterModule.forChild(entrepriseRoutes),
    PdfViewerModule,
  ],
  exports: [],
})
export class EntrepriseModule {}
