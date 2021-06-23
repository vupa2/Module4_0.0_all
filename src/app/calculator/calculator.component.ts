import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  @ViewChild('firstNumber', { static: false })
  firstNumberElement!: ElementRef;
  @ViewChild('secondNumber', { static: false })
  secondNumberElement!: ElementRef;
  public result?: number;

  ngOnInit(): void {}

  calculate(event: Event) {
    const operator = (<HTMLElement>event.target).innerText;
    const firstNumber = this.firstNumberElement.nativeElement.value;
    const secondNumber = this.secondNumberElement.nativeElement.value;
    this.result = eval(firstNumber + operator + secondNumber);
  }
}
