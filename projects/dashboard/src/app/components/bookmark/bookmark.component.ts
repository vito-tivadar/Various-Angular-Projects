import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'bookmark',
  templateUrl: './bookmark.component.html',
  styleUrls: ['./bookmark.component.css'],
})
export class BookmarkComponent implements OnInit {
  constructor() {}

  @Input('image') image = '';
  @Input('imagePadding') imagePadding = '0px 8px 0px 0px';
  @Input('href') href = '#';

  fontSize: string = '0px';

  ngOnInit(): void {}
}
