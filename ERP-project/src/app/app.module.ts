import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './entreprise-space/login/login.component';
import { SignupComponent } from './entreprise-space/signup/signup.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { TooltipModule } from 'primeng/tooltip';
import { AuthGuard } from './shared/services/authGuard';
import { ReactiveFormsModule } from '@angular/forms';

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
    canActivate: [AuthGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
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
    ReactiveFormsModule,
    PdfViewerModule,
    TooltipModule,
  ],
  declarations: [AppComponent, SignupComponent, LoginComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
