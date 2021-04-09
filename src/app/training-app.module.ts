import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { BalanceModule } from './balance/balance.module';
import { HelloComponent } from './hello/hello.component';
import { ProfileModule } from './profile/profile.module';
import { PipesModule } from './pipes/pipes.module';
import { FormsModule } from './forms/forms.module';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { HighlightDirective } from './directives/highlight.directive';
import { HideDirective } from './directives/hide.directive';
/**
 * Main application module
 *
 * Any function, starting with '@' is called a decorator
 */

const routes: Routes = [
  {
    path: '', component: HomeComponent
  },
  {
    path: 'about', component: HelloComponent
  }
];
@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    HighlightDirective,
    HideDirective
  ],
  imports: [
    BrowserModule,
    BalanceModule,
    HttpClientModule,
    ProfileModule,
    PipesModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class TrainingAppModule { }
