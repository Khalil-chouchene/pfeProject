import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './entreprise-space/login/login.component';
import { SignupComponent } from './entreprise-space/signup/signup.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { ProfilComponent } from './offres-list/profil/profil.component';
import { TooltipModule } from 'primeng/tooltip';

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

  {
    path: 'profiil',
    component: ProfilComponent,
  },
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    /*  AppRoutingModule, */
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    /*  EntrepriseModule, */
    SharedModule,
    PdfViewerModule,
    TooltipModule,
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
    LoginComponent,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
