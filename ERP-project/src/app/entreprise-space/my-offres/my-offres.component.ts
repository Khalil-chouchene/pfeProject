import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';

@Component({
  selector: 'app-my-offres',
  templateUrl: './my-offres.component.html',
  styleUrls: ['./my-offres.component.scss'],
})
export class MyOffresComponent implements OnInit {
  searchText;
  offresTab;

  constructor(private entrepriseService: EntrepriseService) {}

  ngOnInit(): void {
    this.entrepriseService.getOffreList().subscribe((offresList) => {
      this.offresTab = offresList;
    });
  }
}
