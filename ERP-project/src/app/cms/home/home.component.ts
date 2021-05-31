import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.module';
import { HomeService } from './home.service';

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
  url: 'https://erp-project-bd5d5-default-rtdb.firebaseio.com/post';

  // tslint:disable-next-line: typedef
  get name() {
    return this.offreCreationForms.get('name');
  }

  // tslint:disable-next-line:typedef
  get description() {
    return this.offreCreationForms.get('description');
  }
  constructor(private http: HttpClient, private homeService: HomeService) {}

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

  // tslint:disable-next-line:typedef
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
              postsArray.push({ ...responseData[key] });
            }
          }
        })
      )
      .subscribe((posts) => {
        console.log(posts);
      });
  }

  // tslint:disable-next-line:typedef
  onClearPosts() {
    this.http.delete(this.url).subscribe(() => {
      // init tab with new elements
    });
  }
}
