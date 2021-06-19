import { Component, OnInit } from '@angular/core';
import { CandidateService } from 'src/app/shared/services/candidate.service';

@Component({
  selector: 'app-offres-list',
  templateUrl: './offres-list.component.html',
  styleUrls: ['./offres-list.component.scss'],
})
export class OffresListComponent implements OnInit {
  offres: any;
  constructor(private candidatService: CandidateService) {}

  offresTab = [
    {
      id: 1,
      name: 'Ingénieur en Mécanique',
      description: ' avec une expérience en solidworks ',
      society: 'Metz, sousse',
    },
    {
      id: 2,
      name: 'software engineer',
      description: ' UI/UX ',
      society: 'Vermeg, Tunis',
    },
    {
      id: 3,
      name: ' Responsable marketing',
      description: ' 2 years of exprinece ',
      society: 'virtuOR, Mahdia',
    },
    {
      id: 4,
      name: 'Assistant commercial',
      description: ' 1 years of exprinece ',
      society: 'Polymédicale clinique de l espoir, Nabeul ',
    },
    {
      id: 5,
      name: 'Ingénieur en Electronique',
      description: ' 1 years of exprinece ',
      society: 'Metz, Mahdia',
    },
  ];

  ngOnInit(): void {
    this.candidatService.getOffreList().subscribe((offresList) => {
      this.offres = offresList;
    });
  }
}
