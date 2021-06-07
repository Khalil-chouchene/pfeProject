import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component'; /*
import { OffresListComponent } from './offres-list/offres-list.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { AllCandidatsComponent } from './offres-list/all-candidats/all-candidats.component';
import { AcceptedCandidatsComponent } from './offres-list/accepted-candidats/accepted-candidats.component';
import { HiredCandidatsComponent } from './offres-list/hired-candidats/hired-candidats.component';
import { ProfilComponent } from './offres-list/profil/profil.component';
import { PostulerComponent } from './postuler/postuler.component';*/
/* import { AppRoutingModule } from './app-routing.module'; */ /*
import { FooterComponent } from './shared/footer/footer.component';
import { FormulaireOffreComponent } from './offres-list/formulaire-offre/formulaire-offre.component'; */
import { HttpClientModule } from '@angular/common/http'; /*
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './candidate-space/home/home.component'; */
/* import { CandidateModule } from './candidate-space'; */ /*
import { EntrepriseModule } from './entreprise-space/entreprise.module'; */
import { SharedModule } from './shared';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './entreprise-space/login/login.component';
import { SignupComponent } from './entreprise-space/signup/signup.component';
import { MyOffresComponent } from './offres-list/my-offres/my-offres.component';
import { HomeComponent } from './candidate-space/home/home.component';

const appRoutes: Routes = [

  {
     path: '',
    loadChildren: () =>
      import('./candidate-space/candidate.module').then(
        (m) => m.CandidateModule
      ),
  },
  {
    path: 'entreprise',
    loadChildren: () =>
      import('./entreprise-space/entreprise.module').then(
        (m) => m.EntrepriseModule
      ),
  },
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    /*  AppRoutingModule, */
    /*  AppRoutingModule, */
RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    /*  EntrepriseModule, */
    SharedModule,
  ],
  declarations: [
    AppComponent,
    /*  OffresListComponent,
    DefaultLayoutComponent,
    BackendLayoutComponent,
    AllCandidatsComponent,
    AcceptedCandidatsComponent,
    HiredCandidatsComponent,
    ProfilComponent,
    HomeComponent,
    PostulerComponent,
    HeaderComponent,
    FooterComponent,
    SideBarComponent,
    FormulaireOffreComponent,
    FormulaireOffreComponent,*/
    SignupComponent,
    LoginComponent
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
