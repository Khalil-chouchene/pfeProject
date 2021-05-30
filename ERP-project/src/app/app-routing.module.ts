import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';

import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { NotFoundComponent } from './cms/not-found/not-found.component';
import { OffresListComponent } from './offres-list/offres-list.component';
import { AllCandidatsComponent } from './offres-list/all-candidats/all-candidats.component';
import { AcceptedCandidatsComponent } from './offres-list/accepted-candidats/accepted-candidats.component';
import { HiredCandidatsComponent } from './offres-list/hired-candidats/hired-candidats.component';
import { HomeComponent } from './cms/home/home.component';
import { ProfilComponent } from './offres-list/profil/profil.component';
import { HeaderComponent } from './header/header.component';
import { PostulerComponent } from './postuler/postuler.component';
import { SignupComponent } from './cms/signup/signup.component';
import { LoginComponent } from './cms/login/login.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormulaireOffreComponent } from './offres-list/formulaire-offre/formulaire-offre.component';

const routes: Routes = [
  // port 4500
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    children: [{ path: '', component: PostulerComponent }],
  },
  { path: 'offreForm', component: FormulaireOffreComponent },
  { path: 'offreList', component: OffresListComponent },
  { path: 'all', component: AllCandidatsComponent },
  { path: 'acceptedList', component: AcceptedCandidatsComponent },
  { path: 'hiredList', component: HiredCandidatsComponent },
  { path: 'header', component: HeaderComponent },
  { path: 'profil', component: ProfilComponent },
  { path: 'signIn', component: LoginComponent },
  { path: 'signUp', component: SignupComponent },
  { path: 'footer', component: FooterComponent },
  { path: 'sideBar', component: SideBarComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
