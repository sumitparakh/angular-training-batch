import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BalanceModule } from './balance/balance.module';
import { HelloComponent } from './hello/hello.component';
import { ProfileModule } from './profile/profile.module';
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
    BalanceModule,
    HttpClientModule,
    ProfileModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TrainingAppModule { }
