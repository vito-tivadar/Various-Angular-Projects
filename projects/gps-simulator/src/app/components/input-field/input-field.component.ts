import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';

@Component({
  selector: 'input-field',
  templateUrl: './input-field.component.html',
  styleUrls: ['./input-field.component.css'],
})
export class InputFieldComponent implements OnInit {
  ngOnInit(): void {
    // console.log(this.value);
  }

  @Input('value') value: string = '';
  @Output('valueChanged') valueChanged = new EventEmitter<string>();

  onValueChange($event: any) {
    this.valueChanged.emit($event.target.value);
  }
}
