import { Component } from '@angular/core';
import { SealedDemo } from 'src/core/decorators/sealed-demo';

/**
 * Decorators will be called before the class is
 * instantiated.
 *
 * var obj = new AppComponent();
 *
 */
@Component({
  selector: 'atb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-training-batch';

  constructor() {
    this.demonstrateSealed();
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
