import { HttpClient } from '@angular/common/http';
import { Component, Input, OnDestroy, OnInit } from '@angular/core';

// tslint or
@Component({
  selector: 'atb-balance', // angular-training-batch
  templateUrl: './balance.component.html',
})
export class BalanceComponent implements OnInit, OnDestroy {
  name = 'hello';

  @Input()
  balance = 0;

  constructor() {
    console.log('[BalanceComponent] Constructor');
  }

  ngOnInit(): void {
    console.log('[BalanceComponent]: ngOnInit');
  }

  ngOnDestroy(): void {
    console.log('[BalanceComponent]: ngOnDestroy');
  }
}
