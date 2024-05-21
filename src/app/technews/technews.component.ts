import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css'],
})
export class TechnewsComponent implements OnInit {
  news: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.technews().subscribe((resp) => {
      //console.log(resp);
      this.news = resp.articles;
    });
  }
}
