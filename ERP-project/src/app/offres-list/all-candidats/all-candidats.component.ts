import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidat.model';
import { CommonModule } from '@angular/common';

import { EntrepriseModule } from './../../entreprise-space/entreprise.module';

@Component({
  selector: 'app-all-candidats',
  templateUrl: './all-candidats.component.html',
  styleUrls: ['./all-candidats.component.css']
})
export class AllCandidatsComponent implements OnInit {
 unCandidat: Candidate ;
 candidates = [
  { id: 1, name: 'Ahmed', LastName: 'chouchene', titre: 'engineer', adress: 'Ksibet el mediouni'},
  { id: 2, name: 'Ayoub', LastName: 'chouchene', titre: 'engineer', adress: 'Ksibet el mediouni'},
  { id: 3, name: 'Khalil', LastName: 'chouchene', titre: 'engineer', adress: 'Ksibet el mediouni'},
];
  constructor() { }

  ngOnInit(): void {
  }

}
