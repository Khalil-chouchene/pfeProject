import { Component, OnInit } from '@angular/core';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { AcceptedCandidatsComponent } from './../accepted-candidats/accepted-candidats.component';

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

  deleteOffre(id) {
    this.entrepriseService.deleteOffre(id).subscribe((val) => {
      const elem = this.offresTab.find((item) => item.id === id);
      this.offresTab.splice(this.offresTab.indexOf(elem), 1);
    });
  }

  masquerOffre(offre, masque) {
    this.entrepriseService
      .modifierOffre({
        id: offre.id,
        masque,
        description: offre.description,
        titre: offre.titre,
      })
      .subscribe((itemToHide) => {
        this.entrepriseService.getOffreList().subscribe((offresList) => {
          this.offresTab = offresList;
        });
      });
  }
}
