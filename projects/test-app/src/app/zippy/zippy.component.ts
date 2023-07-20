import { Component, Input, HostListener } from '@angular/core';
import { expandCollapse } from './zippy.component.animations';

@Component({
  selector: 'zippy',
  templateUrl: './zippy.component.html',
  styleUrls: ['./zippy.component.css'],
  animations: [expandCollapse],
})
export class ZippyComponent {
  @Input('title') zippyTitle: string = 'Default Title';
  @Input('zippyItems') zippyItems: any = [{ name: 'Default 1' }, { name: 'Default 2' }, { name: 'Default 3' }];
  isExpanded: boolean = false;

  @HostListener('mouseenter') onMouseEnter() {
    this.isExpanded = true;
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.isExpanded = false;
  }
}
