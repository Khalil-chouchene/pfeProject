import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './shared/login/login.component';
import { SignupComponent } from './shared/signup/signup.component';
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

  {
    path: 'register',
    component: SignupComponent,
  },
];

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    RouterModule.forRoot(appRoutes, { relativeLinkResolution: 'legacy' }),
    SharedModule,
    ReactiveFormsModule,
  ],
  declarations: [AppComponent, SignupComponent, LoginComponent],
  providers: [AuthGuard],
  bootstrap: [AppComponent],
})
export class AppModule {}
