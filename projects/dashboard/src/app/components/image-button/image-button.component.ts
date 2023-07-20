import { Component, OnInit, Input, HostBinding } from '@angular/core';
import { StyleService } from './../../services/style-service.service';

@Component({
  selector: 'image-button',
  templateUrl: './image-button.component.html',
  styleUrls: ['./image-button.component.css'],
})
export class ImageButtonComponent {
  constructor(private s: StyleService) {}
  @Input('imageHeight') imageHeight = '24px';
  @Input('image') image: string = '';
  @Input('imagePadding') imagePadding: string = '0px 10px 0px 0px';
  @Input('style') style: string = '';

  fontSize: string = this.s.adjustFontToHeight(this.imageHeight);
}
