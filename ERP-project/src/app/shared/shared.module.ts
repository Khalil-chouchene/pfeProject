import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CandidateService } from './services/candidate.service';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { EntrepriseService } from './services/entreprise.service';

@NgModule({
  declarations: [FooterComponent, HeaderComponent, NotFoundComponent],
  imports: [CommonModule, RouterModule, AvatarModule],
  exports: [FooterComponent, HeaderComponent, NotFoundComponent],
  providers: [CandidateService, EntrepriseService],
})
export class SharedModule {}
