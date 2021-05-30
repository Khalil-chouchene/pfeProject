import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

import { Offre } from './offreForm.module';

@Component({
  selector: 'app-formulaire-offre',
  templateUrl: './formulaire-offre.component.html',
  styleUrls: ['./formulaire-offre.component.css']
})
export class FormulaireOffreComponent implements OnInit {
  offrePost: Offre ;
  url: 'https://erp-project-bd5d5-default-rtdb.firebaseio.com//posts.json';
  constructor( private http: HttpClient ) { }

  ngOnInit(): void {
  }

 // tslint:disable-next-line:typedef
 onCreatePost( data: Offre) {                 // Send Http request
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
     .get<{ [key: string]: Offre }>(this.url)
       .pipe(map(responseData  => {
        const postsArray: Offre[] = [];
        for (const key in responseData){
          if (responseData.hasOwnProperty(key)){
            postsArray.push({ ...responseData[key], id : key} );
          }
         }
       }))
       .subscribe(posts => {
         console.log(posts);
       });
 }
}
