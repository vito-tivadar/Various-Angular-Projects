import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ripple } from './../../animations/ripple/ripple.animation';

@Component({
  selector: 'icon-button',
  templateUrl: './icon-button.component.html',
  styleUrls: ['./icon-button.component.css'],
})
export class IconButtonComponent {
  @Input('iconPath') iconPath: string = '';
  @Output('clicked') clicked = new EventEmitter<boolean>();

  onClick() {
    this.clicked.emit(true);
  }
}
