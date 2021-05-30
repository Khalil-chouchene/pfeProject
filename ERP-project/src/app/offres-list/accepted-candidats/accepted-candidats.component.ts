import { Component, OnInit } from '@angular/core';
import { Candidate } from '../all-candidats/candidat.model';

@Component({
  selector: 'app-accepted-candidats',
  templateUrl: './accepted-candidats.component.html',
  styleUrls: ['./accepted-candidats.component.css']
})
export class AcceptedCandidatsComponent implements OnInit {
  candidates: Candidate[] = [
    new Candidate('ayoub', 'chouchene', 'etudiant', 'ksibet el mediouni', 25255590 ),
    new Candidate('abdaziz', 'chouchene', 'etudiant', 'ksibet el mediouni', 25255590 )
   ];
  constructor() { }

  ngOnInit(): void {
  }

}
