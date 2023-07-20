import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'slider-switch',
  templateUrl: './slider-switch.component.html',
  styleUrls: ['./slider-switch.component.css'],
})
export class SliderSwitchComponent implements OnInit {
  @Input('isChecked') isChecked: boolean = false;
  @Output('onCheck') onCheck = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}

  onClick() {
    this.isChecked = !this.isChecked;
    this.onCheck.emit(this.isChecked);
  }
}
