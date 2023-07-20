import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'separator',
  templateUrl: './separator.component.html',
  styleUrls: ['./separator.component.css'],
})
export class SeparatorComponent implements OnInit {
  @Input('isVertical') isVertical: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
