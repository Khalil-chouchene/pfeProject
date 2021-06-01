import { Component, OnInit } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Candidat } from './candidat.model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  offrePost: Candidat ;
  url: 'https://erp-project-bd5d5-default-rtdb.firebaseio.com//posts.json';
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

 // tslint:disable-next-line:typedef
 onCreatePost( data: Candidat) {                 // Send Http request
  this.http.post<{name: string}> (this.url, this.offrePost
      ).subscribe(responseData => {
         console.log(responseData);
      });
}

// tslint:disable-next-line:typedef
onFetchData(){
  this.fetchPosts();
}

// tslint:disable-next-line:typedef
private fetchPosts(){
  this.http
    .get<{ [key: string]: Candidat }>(this.url)
      .pipe(map(responseData  => {
       const postsArray: Candidat[] = [];
       for (const key in responseData){
         if (responseData.hasOwnProperty(key)){
           postsArray.push({ ...responseData[key]} );
         }
        }
      }))
      .subscribe(posts => {
        console.log(posts);
      });
}
}

