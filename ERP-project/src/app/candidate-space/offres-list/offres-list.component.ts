import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CandidateService } from 'src/app/shared/services/candidate.service';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.scss'],
})
export class OffresListComponent implements OnInit {
  offres: any = [];

  constructor(private candidatService: CandidateService) {}

  ngOnInit(): void {
    this.candidatService.getOffreList().subscribe((offresList) => {
      this.offres = offresList;
    });
  }
}
