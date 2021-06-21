import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/shared/services/candidate.service';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulaire-offre',
  templateUrl: './formulaire-offre.component.html',
  styleUrls: ['./formulaire-offre.component.css'],
})
export class FormulaireOffreComponent implements OnInit {
  created: any;
  offrePost: any = {};
  createOffreForm = new FormGroup({
    titre: new FormControl('', [Validators.required]),
    nb_poste: new FormControl('', [Validators.required]),
    description: new FormControl('', [Validators.required]),
  });
  modifMode = false;
  constructor(
    private entrepriseService: EntrepriseService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      if (params && params.titre && params.description) {
        this.modifMode = true;
        this.offrePost = {
          id: params.id,
          titre: params.titre,
          description: params.description,
          nb_poste: params.nb_poste,
          entreprise: params.entreprise,
        };
        this.createOffreForm.patchValue({ ...this.offrePost });
      }
    });
  }

  get titre() {
    return this.createOffreForm.get('titre');
  }
  get nb_poste() {
    return this.createOffreForm.get('nb_poste');
  }
  get description() {
    return this.createOffreForm.get('this.description');
  }
  onCreatePost() {
    if (this.offrePost && this.offrePost.id && this.offrePost.entreprise) {
      this.entrepriseService
        .modifierOffre({
          entreprise: this.offrePost.entreprise,
          id: this.offrePost.id,
          ...this.createOffreForm.value,
        })
        .subscribe((responseData) => {
          this.router.navigate(['/entreprise']);
        });
    } else {
      this.entrepriseService
        .createOffre(this.createOffreForm.value)
        .subscribe((responseData) => {
          this.router.navigate(['/entreprise']);
        });
    }
  }
}
