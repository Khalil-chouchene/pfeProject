import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CandidateService } from './services/candidate.service';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';
import { EntrepriseService } from './services/entreprise.service';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { TooltipModule } from 'primeng/tooltip';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
@NgModule({
  declarations: [FooterComponent, HeaderComponent, NotFoundComponent],
  imports: [
    CommonModule,
    TooltipModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    RouterModule,
    AvatarModule,
  ],
  exports: [
    FooterComponent,
    HeaderComponent,
    Ng2SearchPipeModule,
    NotFoundComponent,
    TooltipModule,
    PdfViewerModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [CandidateService, EntrepriseService],
})
export class SharedModule {}
