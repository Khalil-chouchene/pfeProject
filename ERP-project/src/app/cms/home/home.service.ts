import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.module';

@Injectable({
  providedIn: 'root',
})
export class HomeService {
  private basePath =
    'https://erp-project-bd5d5-default-rtdb.firebaseio.com/posts.json';

  constructor(private http: HttpClient) {}

  onCreatePost(data: Offre): Observable<any> {
    // Send Http request
    return this.http.post<any>(this.basePath, data);
  }
}
