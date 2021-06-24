import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Candidate } from './candidat.model';

@Component({
  selector: 'app-all-candidats',
  templateUrl: './all-candidats.component.html',
  styleUrls: ['./all-candidats.component.scss'],
})
export class AllCandidatsComponent implements OnInit {
  searchText;
  AllCandidates: any;
  filtredCandidates: any;
  etat = false;
  constructor(private router: Router, private activatedRoute: ActivatedRoute) {
    this.AllCandidates = this.router.getCurrentNavigation()?.extras?.state;
    this.filtredCandidates = this.router.getCurrentNavigation()?.extras?.state;
  }

  ngOnInit(): void {}

  handleChange(e) {
    this.etat = e.checked;
    if (this.etat) {
      this.filtredCandidates = [];
      this.AllCandidates.filter((item) => item.etat === 0).forEach((filt) => {
        this.filtredCandidates.push(filt);
      });
    } else {
      this.filtredCandidates = this.AllCandidates;
    }
  }
}
