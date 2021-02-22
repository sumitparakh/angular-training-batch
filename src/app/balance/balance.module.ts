import { NgModule } from '@angular/core';
import { BalanceComponent } from './balance.component';
import { UserBalanceComponent } from './user-balance/user-balance.component';

@NgModule({
  declarations: [BalanceComponent, UserBalanceComponent],

  /**
   * Limiting the scope of components.
   * Allows component to be used outside of this module
   */
  exports: [BalanceComponent],
})
export class BalanceModule {}
