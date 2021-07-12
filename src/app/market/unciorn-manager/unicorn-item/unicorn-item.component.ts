import { Unicorn } from 'src/app/generated/api/models/unicorn';
import { Component, Input, OnInit } from '@angular/core';
import { UnicornMarketService } from 'src/app/generated/api/services/unicorn-market.service';
import { CurrencyService } from 'src/app/forex/currency/currency.service';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-unicorn-item',
  templateUrl: './unicorn-item.component.html',
  styleUrls: ['./unicorn-item.component.css']
})
export class UnicornItemComponent implements OnInit {

  constructor(
    private priceService: UnicornMarketService,
    private currencyService : CurrencyService
  ) { }
  @Input() currentUnicorn: Unicorn;
  currency: string;
  exchangedValue: number;

  ngOnInit(): void {
    this.currencyService.getSelectedCurencyObs().subscribe(cur => {
      console.log('currency: ', cur)
      if (this.currentUnicorn.basePrice){
        this.currency = cur[0]
      this.exchangedValue = cur[1] * this.currentUnicorn.basePrice
      }      
    })
  }

  updatePrice() {
      this.priceService.getMarketPrice({uniName:this.currentUnicorn.name}).subscribe( 
      generatedPrice => this.currentUnicorn.basePrice = generatedPrice)
  }

}
