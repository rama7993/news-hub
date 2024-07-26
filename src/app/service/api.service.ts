import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl!: string;
  apiKey!: string;

  constructor(private http: HttpClient) {
    this.baseUrl = environment.baseURL;
    this.apiKey = environment.apiKey;
  }

  topHeading(): Observable<any> {
    const params = new HttpParams()
      .set('q', 'bitcoin')
      .set('apiKey', this.apiKey);

    return this.http.get(`${this.baseUrl}/everything`, { params });
  }

  technews(): Observable<any> {
    const params = new HttpParams()
      .set('category', 'general')
      .set('apiKey', this.apiKey);

    return this.http.get(`${this.baseUrl}/top-headlines`, { params });
  }
}
