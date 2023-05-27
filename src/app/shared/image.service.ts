import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Prediction } from '../shared/ prediction.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  apiUrl = `${environment.apiUrl}/predict`;

  constructor(private http: HttpClient) {}

  getPredictions(formData: FormData): Observable<Prediction[]> {
    return this.http.post<Prediction[]>(this.apiUrl, formData);
  }
}
