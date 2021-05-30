import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.module';

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
  url: 'https://erp-project-bd5d5-default-rtdb.firebaseio.com//posts.json';

  // tslint:disable-next-line: typedef
  get Name() {
    return this.offreCreationForms.get('name');
  }

  // tslint:disable-next-line:typedef
  get description() {
    return this.offreCreationForms.get('name');
  }
  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // tslint:disable-next-line:typedef
  onCreatePost(data: Offre) {
    // Send Http request
    this.http
      .post<{ name: string }>(this.url, this.offrePost)
      .subscribe((responseData) => {
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
