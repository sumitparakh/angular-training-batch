import { Component } from '@angular/core';
import { sealed } from 'src/core/decorators/sealed';

/**
 * Decorators will be called before the class is
 * instantiated.
 *
 * var obj = new AppComponent();
 *
 */
@sealed
@Component({
  selector: 'atb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'angular-training-batch';
  message = 'Hello world';

  constructor() {
    delete (this as any)['message'];
  }
}
