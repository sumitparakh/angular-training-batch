import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { HttpRequestService } from '../core/http-request.service';

@Injectable({
  providedIn: 'root',
})
export class BalanceService {
  balance = 10;

  updateBalance$: Subject<number> = new Subject<number>();

  constructor(private http: HttpRequestService) {}

  updateBalance(balance: number): void {
    this.balance = balance;

    // Emitting an event that balance is updated.
    this.updateBalance$.next(this.balance);

    this.http.put('http://update-balance.com', { balance }).subscribe(
      (response) => {
        console.log({ response });
      },
      (error) => {
        console.log({ error });
      }
    );
    // make http calls if required
  }

  getBalance(): number {
    // this.http.get('http://get-balance.com');
    return this.balance;
  }

  clear(): void {
    this.balance = 0;
  }
}
