import { Component, OnInit } from '@angular/core';
import { Currency } from './currency.model';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  constructor(private currencyService: CurrencyService) {}
  readonly currencies: string[] = ['EUR', 'USD', 'GBP', 'JPY', 'CHF', 'CAD'];
  exchangeRates: Map<string, number> = new Map();

  ngOnInit(): void {
    for (let cur of this.currencies) {
      this.currencyService.getExchangeRate(cur).subscribe((xr) => {
        this.exchangeRates[xr.currency] = xr.rate;
      });
    }
  }

  onSelectedCurrency(ob) {
    let currency = ob.value;
    this.currencyService.onSelectCurrency(
      new Currency(currency, this.exchangeRates[currency])
    );
  }
}
