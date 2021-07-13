import { Unicorn } from 'src/app/generated/api/models/unicorn';
import { Component, Input, OnInit } from '@angular/core';
import { UnicornMarketService } from 'src/app/generated/api/services/unicorn-market.service';
import { CurrencyService } from 'src/app/forex/currency/currency.service';

@Component({
  selector: 'app-unicorn-item',
  templateUrl: './unicorn-item.component.html',
  styleUrls: ['./unicorn-item.component.css'],
})
export class UnicornItemComponent implements OnInit {
  constructor(
    private priceService: UnicornMarketService,
    private currencyService: CurrencyService
  ) {}
  @Input() currentUnicorn: Unicorn;
  currency: string;
  exchangeRate: number;
  exchangedValue: number;

  ngOnInit(): void {
    this.currencyService.getSelectedCurencyObs().subscribe((cur) => {
      if (this.currentUnicorn.basePrice) {
        this.currency = cur.currency;
        this.exchangeRate = cur.rate;
        this.convert();
      }
    });
  }

  updatePrice() {
    this.priceService
      .getMarketPrice({ uniName: this.currentUnicorn.name })
      .subscribe((generatedPrice) => {
        this.currentUnicorn.basePrice = generatedPrice;
        if (this.currency && this.exchangeRate) {
          this.convert();
        }
      });
  }

  convert(): void {
    this.exchangedValue = this.exchangeRate * this.currentUnicorn.basePrice;
  }
}
