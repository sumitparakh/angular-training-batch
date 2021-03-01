import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HttpRequestService {
  constructor(private http: HttpClient) {}

  get(url: string, options?: any): Observable<any> {
    return this.http.get(url, options);
  }

  getToken(): string | null {
    const token = localStorage.getItem('token'); // returns authentication token
    return token;
  }

  post(url: string, body: any = {}, options?: any): Observable<any> {
    const token = this.getToken();
    const headers: HttpHeaders = new HttpHeaders();
    if (token) {
      headers.set('Authentication', 'Bearer ' + token);
      options.headers = headers;
    }

    return this.http.post(url, body, options);
  }

  delete(url: string, options?: any): Observable<any> {
    return this.http.delete(url, options);
  }

  put(url: string, body: any = {}, options?: any): Observable<any> {
    return this.http.put(url, body, options);
  }
}
