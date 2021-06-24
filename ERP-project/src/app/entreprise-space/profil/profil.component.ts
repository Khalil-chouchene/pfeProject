import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EntrepriseService } from 'src/app/shared/services/entreprise.service';
import { pdfDefaultOptions } from 'ngx-extended-pdf-viewer';
@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css'],
})
export class ProfilComponent implements OnInit {
  path = `/assets/Mohamed.pdf`;
  pdfSrc1: any;
  candidate: any;
  constructor(
    private http: HttpClient,
    private entrepriseService: EntrepriseService,
    private router: Router
  ) {
    pdfDefaultOptions.assetsFolder = 'bleeding-edge';
    this.candidate = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {}

  accepter() {
    this.entrepriseService
      .changeEtat({ etat: 1, id: this.candidate.id })
      .subscribe((arg) => {});
  }
  refuser() {
    this.entrepriseService
      .changeEtat({ etat: 2, id: this.candidate.id })
      .subscribe((arg) => {});
  }
}
