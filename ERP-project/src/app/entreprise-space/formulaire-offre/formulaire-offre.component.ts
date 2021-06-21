import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CandidateService } from 'src/app/shared/services/candidate.service';

@Component({
  selector: 'app-formulaire-offre',
  templateUrl: './formulaire-offre.component.html',
  styleUrls: ['./formulaire-offre.component.css'],
})
export class FormulaireOffreComponent implements OnInit {
  created: any;
  offrePost: any;

  constructor(
    private http: HttpClient,
    private creationOffreService: CandidateService
  ) {}

  ngOnInit(): void {}

  // tslint:disable-next-line: member-ordering
  createOffreForm = new FormGroup({
    offreName: new FormControl('', [Validators.required]),
    societeName: new FormControl('', [Validators.required]),
    offreDesc: new FormControl('', [Validators.required]),
  });

  get offreName() {
    return this.createOffreForm.get('offreName');
  }
  get societe() {
    return this.createOffreForm.get('societeName');
  }
  get description() {
    return this.createOffreForm.get('offreDesc');
  }
  onCreatePost() {
    this.created = {
      offreName: this.offreName.value,
      societe: this.societe.value,
      description: this.description.value,
    };
    // Send Http request
    this.creationOffreService
      .onCreatePost(this.created)
      .subscribe((responseData) => {});
  }

  /*  // tslint:disable-next-line:typedef
  onFetchData() {
    this.fetchPosts();
  }

  // tslint:disable-next-line:typedef
  private fetchPosts() {
    this.http
      .get<{ [key: string]: Offre }>(this.url)
      .pipe(
        map((responseData) => {
          const postsArray: Offre[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postsArray.push({ ...responseData[key], id: key });
            }
          }
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }

  // tslint:disable-next-line:typedef
  CreatePost(data: any) {
    // Send Http request
    this.http
      .post<{ name: string }>(this.url, this.offrePost)
      .subscribe((responseData) => {
        console.log(responseData);
      });
  } */
}
