import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-name-card',
  templateUrl: './name-card.component.html',
  styleUrls: ['./name-card.component.css'],
})
export class NameCardComponent implements OnInit {
  @Input() cardName: string = 'Professional Dev';
  @Input() email: string = 'prodev@codegym.vn';
  @Input() phone: string = '0123456789';

  constructor() {}

  ngOnInit(): void {}
}
