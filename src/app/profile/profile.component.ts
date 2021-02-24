import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'atb-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
})
export class ProfileComponent implements OnInit {

  profileData: any;

  constructor(private http: HttpClient) {}

  ngOnInit(): void {

  }

  // REST Api - Protocol
  fetchProfile(): void {
    this.http.get('https://randomuser.me/api').subscribe(
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
    );
  }
}
