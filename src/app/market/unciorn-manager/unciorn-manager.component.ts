
import { Component, OnInit } from '@angular/core';
import { Unicorn } from 'src/app/generated/api/models/unicorn';
import { UnicornOfferingService } from 'src/app/generated/api/services/unicorn-offering.service';

@Component({
  selector: 'app-unciorn-manager',
  templateUrl: './unciorn-manager.component.html',
  styleUrls: ['./unciorn-manager.component.css'],
})
export class UnciornManagerComponent implements OnInit {
  constructor(private offerService: UnicornOfferingService) {}

  offeredUnicorns: Unicorn[] = [];

  ngOnInit(): void {
    var headers = new Headers({'Access-Control-Allow-Origin': '*'})
    this.offerService.getOffers(headers).subscribe(res => {
      this.offeredUnicorns = res;
    });
  }
}
