import { Component, OnInit } from '@angular/core';
import { Candidate } from './candidat.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-all-candidats',
  templateUrl: './all-candidats.component.html',
  styleUrls: ['./all-candidats.component.css']
})
export class AllCandidatsComponent implements OnInit {
 unCandidat: Candidate ;
 candidates: Candidate[] = [
  new Candidate('khalil', 'chouchene', 'etudiant', 'ksibet el mediouni', 25255590 ),
  new Candidate('ahmed', 'chouchene', 'etudiant', 'ksibet el mediouni', 25255590 )
 ];
  constructor() { }

  ngOnInit(): void {
  }

}
