import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OffresListComponent } from './offres-list/offres-list.component';
import { DefaultLayoutComponent } from './layouts/default-layout/default-layout.component';
import { BackendLayoutComponent } from './layouts/backend-layout/backend-layout.component';
import { AllCandidatsComponent } from './offres-list/all-candidats/all-candidats.component';
import { AcceptedCandidatsComponent } from './offres-list/accepted-candidats/accepted-candidats.component';
import { HiredCandidatsComponent } from './offres-list/hired-candidats/hired-candidats.component';
import { ProfilComponent } from './offres-list/profil/profil.component';
import { PostulerComponent } from './postuler/postuler.component';
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { FormulaireOffreComponent } from './offres-list/formulaire-offre/formulaire-offre.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './cms/home/home.component';

@NgModule({
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  declarations: [
    AppComponent,
    OffresListComponent,
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
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
