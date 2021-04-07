import { Component } from '@angular/core';
import { SealedDemo } from 'src/core/decorators/sealed-demo';

@Component({
  selector: 'atb-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  title = 'angular-training-batch';

  toggleBalance = false;

  constructor() {
    this.demonstrateSealed();
  }

  onBalanceBlick(): void {
    this.toggleBalance = !this.toggleBalance;
  }

  onBalanceDblClick(): void {
    alert('Button double clicked');
  }

  /**
   *
   * Real use-cases of decorators
  validate(@validate firstName: string, @validate lastName: string) {

  }
  **/
  demonstrateSealed() {
    try {
      const sealedDemo = new SealedDemo('Sumit');
      sealedDemo.greet();
      delete (SealedDemo.prototype as any).greet;
      // (SealedDemo.prototype as any).name = 'Hello world';
      console.log(Object.isSealed(SealedDemo));
      // delete (this as any)['message'];
    } catch (error) {}
  }
}
