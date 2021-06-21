import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { CandidateService } from './services/candidate.service';
import { RouterModule } from '@angular/router';
import { AvatarModule } from 'ngx-avatar';

@NgModule({
  declarations: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    NotFoundComponent,
  ],
  imports: [CommonModule, RouterModule, AvatarModule],
  exports: [
    FooterComponent,
    HeaderComponent,
    SideBarComponent,
    NotFoundComponent,
  ],
  providers: [CandidateService],
})
export class SharedModule {}
