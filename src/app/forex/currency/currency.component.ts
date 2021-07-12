import { Component, OnInit } from '@angular/core';
import { CurrencyService } from './currency.service';

@Component({
  selector: 'app-currency',
  templateUrl: './currency.component.html',
  styleUrls: ['./currency.component.css'],
})
export class CurrencyComponent implements OnInit {
  constructor(
    private currencyService : CurrencyService
  ) {}
  currencies: string[] = ['EUR', 'USD', 'GBP', 'JPY', 'CHF', 'CAD'];
  exchangeRates: Map<string, number> = new Map();

  ngOnInit(): void {
    for (let cur of this.currencies) {
      console.log(cur);
      this.exchangeRates[cur] = Math.random();
    }
    console.log('Exchange rates map: ', this.exchangeRates);
  }

  onSelectedCurrency(ob){
    let currency = ob.value
    console.log('Objet a balancer: ', currency, this.exchangeRates[currency])
    this.currencyService.onSelectCurrency([currency, this.exchangeRates[currency]])
  }
}
