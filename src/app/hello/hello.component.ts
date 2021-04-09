import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'atb-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  @Input()
  name = '';

  toggle = false;

  colorStyleMapping: any = {
    0: 'red',
    1: 'green',
    2: 'blue',
  };

  colorIndex = 0;

  constructor() { }

  ngOnInit(): void {
  }

  incrementColorCounter() {
    this.colorIndex = (++this.colorIndex)%3;
  }

}
