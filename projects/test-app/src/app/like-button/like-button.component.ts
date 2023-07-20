import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'like-button',
  templateUrl: './like-button.component.html',
  styleUrls: ['./like-button.component.css']
})
export class LikeButtonComponent {
  @Input('isChecked') isChecked: boolean = false;
  @Input('likeCount') likeCount: number = 0;
  @Output('change') change = new EventEmitter();

  onClick(){
    this.isChecked = !this.isChecked;

    this.change.emit(this.isChecked);
  }
}