import { Component, Input, OnInit } from '@angular/core';
import { StyleService } from './../../services/style-service.service';

@Component({
  selector: 'container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.css'],
})
export class ContainerComponent implements OnInit {
  @Input('title') title: string = '';
  @Input('titleImage') titleImage: string = '';
  @Input('titleHeight') titleHeight: string = '20px';

  @Input('contentDivStyle') contentDivStyle: string = '';
  @Input('titleDivStyle') titleDivStyle: string = '';

  titleFontSize: string = '0px';

  constructor(private s: StyleService) {}

  ngOnInit(): void {
    this.titleFontSize = this.s.adjustFontToHeight(this.titleHeight);
  }
}
