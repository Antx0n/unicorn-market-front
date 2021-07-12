import { Injectable } from "@angular/core";
import { Observable, Subject } from "rxjs";

@Injectable
({
    providedIn: 'root'
})
export class CurrencyService {
    
    private $selectedCurrency: Subject<[string,number]> = new Subject<[string,number]>();

    constructor() {}

    onSelectCurrency(cur: [string,number]){
        return this.$selectedCurrency.next(cur)
    }

    getSelectedCurencyObs(): Observable<object> {
        return this.$selectedCurrency.asObservable();
    }

}