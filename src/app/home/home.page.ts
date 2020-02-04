import { Component } from '@angular/core';
import { NewsApiService } from 'angular-news-api';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  details = null;

  constructor(private newsApiService: NewsApiService) {}

  topHeadlines() {
    this.newsApiService.topHeadlines({
      sources: 'bbc-news, the-verge'
    }).subscribe(data => {
      console.log(data)
      this.details = data;
    });
  }
  // everything() {
  //   this.newsApiService.everything({
  //     q: 'trump'
  //   }).subscribe(data => console.log(data));
  // }
  // sources() {
  //   this.newsApiService.sources({
  //     country: 'us'
  //   }).subscribe(data => console.log(data));
  // }

}