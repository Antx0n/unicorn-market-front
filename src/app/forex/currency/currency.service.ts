import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Currency } from './currency.model';

@Injectable({
  providedIn: 'root',
})
export class CurrencyService {
  private CURRENCY_API_SERVER = 'http://localhost:9090/api/v1/currency/';
  private $selectedCurrency: Subject<Currency> = new Subject<Currency>();

  constructor(private httpClient: HttpClient) {}

  onSelectCurrency(cur: Currency) {
    return this.$selectedCurrency.next(cur);
  }

  getSelectedCurencyObs(): Observable<Currency> {
    return this.$selectedCurrency.asObservable();
  }

  getExchangeRate(cur: string): Observable<any> {
    return this.httpClient.get(this.CURRENCY_API_SERVER.concat(cur));
  }
}
