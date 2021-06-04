import { getLocaleMonthNames } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.model';
import { CandidateService } from '../../shared/services/candidate.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  offrePost: Offre;
  offreCreationForms = new FormGroup({
    name: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
  });

  get name() {
    return this.offreCreationForms.get('name');
  }

  get description() {
    return this.offreCreationForms.get('description');
  }
  constructor(private homeService: CandidateService , private router: Router ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onCreatePost() {
    this.offrePost = {
      descrption: this.description.value,
      nom: this.name.value,
    };
    // Send Http request
    this.homeService.onCreatePost(this.offrePost).subscribe((responseData) => {
      console.log(responseData);
    });

  }


}
