import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class CandidateService {
  private basePath = environment.baseApiPath;

  constructor(private http: HttpClient) {}

  onCreatePost(data: any): Observable<any> {
    let header = new HttpHeaders({
      token: '09cf310547c18726c995277654dc820db3b9565461b7a2a5b2872c0f007d311f',
    });

    // ****************** data:Offre
    // Send Http request
    return this.http.post<any>(this.basePath + '/offres/', data);
  }
  onPostule(data: any): Observable<any> {
    let header = new HttpHeaders({
      token: '28ff7b5c287def73a8f04719227f37808073655c97fc1bd81097844ce021c681',
    });
    // Send Http request
    return this.http.post<any>(this.basePath + '/condidatures/', data);
  }
  onsignUp(data: any): Observable<any> {
    // Send Http request
    return this.http.post<any>(this.basePath + '//', data); // endPoint
  }
  getOffreList(): Observable<any> {
    return this.http.get<any>(this.basePath + '/public-offres/');
    /*  return this.http.get<any>(this.basePath + '/posts.json'); */
  }
}
