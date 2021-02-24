import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'atb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit, OnDestroy {
  profileData: any;
  profile$?: Subscription;
  profileObservable?: Observable<any>;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  // REST Api - Protocol
  fetchProfile(): void {
    this.profileObservable = this.http.get('https://randomuser.me/api');

    /* this.profile$ = this.http.get('https://randomuser.me/api').subscribe(
      (response: any) => {
        this.profileData = response.results;
        // console.log(response);
      },
      // Non 200 response
      (error) => {
        console.log('Error occured');
        console.error(error);
      },
      () => {
        console.log('Always be executed');
      }
    ); */
  }

  ngOnDestroy(): void {
    if (this.profile$) {
      this.profile$?.unsubscribe();
    }
  }
}
