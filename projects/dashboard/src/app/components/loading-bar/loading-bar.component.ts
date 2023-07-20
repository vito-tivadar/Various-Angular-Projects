import {
  Component,
  HostBinding,
  Input,
  OnInit,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'loading-bar',
  templateUrl: './loading-bar.component.html',
  styleUrls: ['./loading-bar.component.css'],
  animations: [],
})
export class LoadingBarComponent implements OnChanges, OnInit {
  @Input('valueCurrent') valueCurrent: number = 50;
  @Input('valueMax') valueMax: number = 100;
  @Input('valueUnit') valueUnit: string = '%';
  @Input('displayMaxValue') displayMaxValue: boolean = true;

  @Input('icon') icon: string = '';
  @Input('title') title: string = '';
  @Input('barColor') barColor: string = '#0062ad';
  @Input('dataUpdateFrequency') dataUpdateFrequency: string = '500ms';

  percentage: number = 0;
  maxValueDisplay: string = '';

  constructor() {}

  ngOnInit(): void {
    if (this.displayMaxValue) this.maxValueDisplay = '/ ' + this.valueMax;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (!changes['valueCurrent']) return;
    this.percentage = this.calculatePercentage();
  }

  calculatePercentage(): number {
    let decimalPercentage: number = this.valueCurrent / this.valueMax;
    let percentage: number = Math.round(decimalPercentage * 100);
    return percentage;
  }
}
