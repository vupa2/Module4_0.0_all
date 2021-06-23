import { Component, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-countdown-timer',
  templateUrl: './countdown-timer.component.html',
  styleUrls: ['./countdown-timer.component.css'],
})
export class CountdownTimerComponent implements OnInit {
  message!: string;
  remainingTime!: number;
  seconds: number = 11;
  private intervalId = 0;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log(changes);
    // if ('seconds' in changes) {
    //   let v = changes.seconds.currentValue;
    //   v = typeof v === 'undefined' ? 11 : v;
    //   const vFixed = Number(v);
    //   this.seconds = Number.isNaN(vFixed) ? 11 : vFixed;
    // }
  }

  ngOnInit(): void {
    this.reset();
  }

  start(): void {
    if (this.remainingTime <= 0) {
      this.remainingTime = this.seconds;
    }
    this.countDown();
  }

  stop() {
    if (this.remainingTime < 11) {
      this.clearTimer();
      this.message = `Holding at T-${this.remainingTime} seconds`;
    }
  }

  reset() {
    this.clearTimer();
    this.remainingTime = this.seconds;
    this.message = `Click start button to start the Countdown`;
  }

  clearTimer() {
    clearInterval(this.intervalId);
  }

  countDown() {
    this.clearTimer();
    this.intervalId = window.setInterval(() => {
      this.remainingTime--;
      if (this.remainingTime === 0) {
        this.message = 'Blast Off';
        this.clearTimer();
      } else {
        this.message = `${this.remainingTime} seconds and counting`;
      }
    }, 1000);
  }
}
