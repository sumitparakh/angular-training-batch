import { ChangeDetectorRef, Component, OnInit } from '@angular/core';

@Component({
  selector: 'atb-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css'],
})
export class PipesComponent implements OnInit {
  numArray = [1, 2, 3, 4];
  currentDate = new Date();
  constructor(private cdr: ChangeDetectorRef) {}

  ngOnInit(): void {}

  addItem(item: string): void {
    const num = +item;
    if (!Number.isNaN(num)) {
      this.numArray.push(num);
    }
  }
}
