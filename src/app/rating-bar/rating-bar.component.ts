import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import { IRatingUnit } from '../irating-unit';

@Component({
  selector: 'app-rating-bar',
  templateUrl: './rating-bar.component.html',
  styleUrls: ['./rating-bar.component.css'],
})
export class RatingBarComponent implements OnInit, OnChanges {
  max: number = 10;
  ratingValue: number = 5;
  showRatingValue: boolean = true;
  // @Output() rateChange = new EventEmitter<number>();
  ratingUnits: Array<IRatingUnit> = Array();

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if ('max' in changes) {
    //   let max = changes.max.currentValue;
    //   max = typeof max === 'undefined' ? 5 : max;
    //   this.max = max;
    //   this.calculate(this.max, this.ratingValue);
    // }
  }

  calculate(max: number, ratingValue: number) {
    this.ratingUnits = Array.from({ length: max }, (_, index) => ({
      value: index + 1,
      active: index < ratingValue,
    }));
  }

  ngOnInit(): void {
    this.calculate(this.max, this.ratingValue);
  }

  select(index: number) {
    this.ratingValue = index + 1;
    this.leave();
    // this.rateChange.emit(this.ratingValue);
  }

  enter(index: number) {
    this.ratingUnits.forEach((item, idx) => (item.active = idx <= index));
  }

  leave() {
    this.ratingUnits.forEach(
      (item, idx) => (item.active = idx < this.ratingValue)
    );
  }
}
