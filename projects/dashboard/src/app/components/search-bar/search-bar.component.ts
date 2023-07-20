import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css'],
})
export class SearchBarComponent implements OnInit {
  @Input('buttonsWidth') buttonsWidth = '90px';
  constructor(private router: Router) {}

  buttons = [
    {
      searchEngine: 'DuckDuckGo',
      searchQueryFunction: (searchQuery: any) => {
        this.checkForURLinQuery(searchQuery);

        let URL = 'https://duckduckgo.com/';
        // console.log('DuckDuckGo', searchQuery);
        if (searchQuery == '') location.href = URL;
        else location.href = `${URL}?q=${searchQuery.replace(' ', '+')}`;
      },
    },
    {
      searchEngine: 'Google',
      searchQueryFunction: (searchQuery: any) => {
        this.checkForURLinQuery(searchQuery);

        let URL = 'https://www.google.com/';
        if (searchQuery == '') location.href = URL;
        else location.href = `${URL}search?hl=sl&q=${searchQuery}`;
        // console.log('Google', searchQuery);
      },
    },
    {
      searchEngine: 'YouTube',
      searchQueryFunction: (searchQuery: any) => {
        this.checkForURLinQuery(searchQuery);

        let URL = 'https://www.youtube.com/';
        if (searchQuery == '') location.href = URL + 'feed/subscriptions/';
        else location.href = `${URL}results?search_query=${searchQuery.replace(' ', '+')}`;
        // console.log('YouTube', searchQuery);
      },
    },
    {
      searchEngine: 'Aliexpress',
      searchQueryFunction: (searchQuery: any) => {
        this.checkForURLinQuery(searchQuery);

        let URL = 'https://www.aliexpress.com/';
        if (searchQuery == '') location.href = URL;
        else {
          location.href = `${URL}w/wholesale-${searchQuery.replace(' ', '-')}.html?SearchText=${searchQuery}`;
        }
        // console.log('Aliexpress', searchQuery);
      },
    },
  ];

  ngOnInit(): void {}

  private checkForURLinQuery(searchQuery: any) {
    if (searchQuery.startsWith('https://') || searchQuery.startsWith('http://')) location.href = searchQuery;
  }
}
