import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.model';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private basePath = environment.baseApiPath;

  constructor(private http: HttpClient) {}

  onCreatePost(data: Offre): Observable<any> {
    // ****************** data:Offre
    // Send Http request
    return this.http.post<any>(this.basePath + '/posts.json', data);
  }
  onPostule(data: Offre): Observable<any> {
    // Send Http request
    return this.http.post<any>(this.basePath + '/candidats.json', data);
  }
  onsignUp(data: any): Observable<any> {
    // Send Http request
    return this.http.post<any>(this.basePath + '/candidats.json', data);
  }
  getOffreList(): Observable<any> {
    return of([
      { id: 1, name: 'Cartage solution', description: ' monsef ' },
      { id: 2, name: 'ali', description: ' monsef ' },
      { id: 3, name: 'ali', description: ' monsef ' },
    ]);
    /*  return this.http.get<any>(this.basePath + '/posts.json'); */
  }
}
