import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidat.model';
import { CommonModule } from '@angular/common';

import { EntrepriseModule } from './../../entreprise-space/entreprise.module';

@Component({
  selector: 'app-all-candidats',
  templateUrl: './all-candidats.component.html',
  styleUrls: ['./all-candidats.component.css'],
})
export class AllCandidatsComponent implements OnInit {
  unCandidat: Candidate;
  candidates = [
    {
      id: 1,
      name: 'Ahmed',
      LastName: 'Mansouri',
      titre: 'Front-end developer',
      adress: 'Monastir',
    },
    {
      id: 2,
      name: 'Ayoub',
      LastName: 'Boubaker',
      titre: 'data scientist',
      adress: 'Jerba',
    },
    {
      id: 3,
      name: 'Mohamed',
      LastName: 'Ayed',
      titre: 'engineer',
      adress: 'Nabeul',
    },
    {
      id: 4,
      name: 'Achref',
      LastName: 'Abderahmen',
      titre: 'engineer',
      adress: 'Monastir Ksibet el mediouni ',
    },
    {
      id: 4,
      name: 'Ahmed',
      LastName: 'Lbahi',
      titre: 'engineer',
      adress: 'Sfax  ',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
