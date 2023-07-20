import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css'],
})
export class CheckboxComponent implements OnInit {
  constructor() {}

  @Input('textContent') textContent: string = '';
  @Input('checkboxSign') checkboxSign: string = '✔'; // ⨉
  @Input('checkboxID') checkboxID: string = this.generateRandomID();
  @Input('checked') checked: boolean = false;
  @Output('onChange') onChange = new EventEmitter<boolean>();

  ngOnInit(): void {}

  onCheck() {
    this.checked = !this.checked;
    this.onChange.emit(this.checked);
  }

  setTextContent() {}

  generateRandomID(): string {
    let random = Math.random() * 10000;
    random = Math.round(random);
    return random.toString();
  }
}
