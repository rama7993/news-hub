import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  topHeadingDisplay: any = [];

  constructor(private apiService: ApiService) {}

  ngOnInit(): void {
    this.apiService.topHeading().subscribe((resp) => {
      //console.log(resp);
      this.topHeadingDisplay = resp.articles;
    });
  }

  removeShimmer(event: Event) {
    const img = event.target as HTMLImageElement;
    img.classList.remove('shimmer');
  }
}
