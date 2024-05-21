import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  private newsApiUrl: string =
    'https://newsapi.org/v2/top-headlines?country=us&apiKey=ff60dd9700074b3a80829465ba3d2d99';
  private techNewsApiUrl: string =
    'https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=ff60dd9700074b3a80829465ba3d2d99';

  topHeading(): Observable<any> {
    return this.http.get(this.newsApiUrl);
  }
  technews(): Observable<any> {
    return this.http.get(this.techNewsApiUrl);
  }
}
