import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.css'],
})
export class ColorPickerComponent implements OnInit {
  public bgColor: string = 'transparent';

  constructor() {}

  ngOnInit(): void {}

  changeBgColor(event: Event) {
    this.bgColor = (<HTMLElement>event.target).innerText;
  }
}
