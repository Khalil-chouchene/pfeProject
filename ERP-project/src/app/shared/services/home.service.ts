import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Offre } from 'src/app/offres-list/formulaire-offre/offreForm.module';
import { environment } from '../../../environments/environment';
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
}
