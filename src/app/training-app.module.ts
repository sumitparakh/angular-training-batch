import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BalanceModule } from './balance/balance.module';
import { HelloComponent } from './hello/hello.component';
/**
 * Main application module
 *
 * Any function, starting with '@' is called a decorator
 */
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent
  ],
  imports: [
    BrowserModule,
    BalanceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TrainingAppModule { }
