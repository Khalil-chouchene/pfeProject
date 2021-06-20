import { HttpClient, HttpHeaders } from '@angular/common/http';
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
    let header = new HttpHeaders({
      token: '28ff7b5c287def73a8f04719227f37808073655c97fc1bd81097844ce021c681',
    });
    // Send Http request
    return this.http.post<any>(this.basePath + '/condidatures/', data);
  }
  onsignUp(data: any): Observable<any> {
    // Send Http request
    return this.http.post<any>(this.basePath + '/candidats.json', data);
  }
  getOffreList(): Observable<any> {
    return this.http.get<any>(this.basePath + '/publicoffres');
    /*  return this.http.get<any>(this.basePath + '/posts.json'); */
  }
}
