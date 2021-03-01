import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { BalanceService } from './balance.service';

@Component({
  selector: 'atb-balance', // angular-training-batch
  templateUrl: './balance.component.html',
})
export class BalanceComponent implements OnInit, OnDestroy {
  name = 'hello';

  @Input()
  balance = 0;

  constructor(private balService: BalanceService) {
    console.log('[BalanceComponent] Constructor');

    /**
     * Every subscription needs to be unsubscribed
     */
    this.balService.updateBalance$.subscribe((updatedBalance) => {
      this.balance = updatedBalance;
    });
  }

  ngOnInit(): void {
    this.balance = this.balService.getBalance();
    console.log(this.balService);
    console.log('[BalanceComponent]: ngOnInit');
  }

  updateBalance(balance: string): void {
    /**
     * throttling / debounce
     *
     * 1000 ms (1 sec) - 9 unnecessary requests are saved
     */
    this.balService.updateBalance(parseInt(balance, 10));
  }

  ngOnDestroy(): void {
    console.log('[BalanceComponent]: ngOnDestroy');
    /**
     * It is important to unsubscribe subscriptions to avoid memory leak
     * at runtime.
     */
    this.balService.updateBalance$.unsubscribe();
  }
}
