import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.model';
import { environment } from '../../../environments/environment';
import { Entreprise } from './../../entreprise-space/signup/candidat.model';
@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private basePath = environment.baseApiPath;

  constructor(private http: HttpClient) {}

  onCreatePost(data: Offre): Observable<any> {
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
}
