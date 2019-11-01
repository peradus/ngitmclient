import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})

export class AboutComponent implements OnInit {
  h1Style: Boolean = false;
  model = {
    left: true,
    middle: false,
    right: false
  };

  constructor() { }

  ngOnInit() {
  }

  firstClick() {
    console.log('Button has been clicked');
    this.h1Style = true;
  }
}
