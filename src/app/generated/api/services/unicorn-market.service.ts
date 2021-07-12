/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class UnicornMarketService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getMarketPrice
   */
  static readonly GetMarketPricePath = '/market/price';

  /**
   * Returns the current price of a unicorn.
   *
   * Based on combinaison of the name's hashcode and a fraction of currentTimeMillis
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getMarketPrice()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMarketPrice$Response(params?: {

    /**
     * Unicorn&#x27;s name
     */
    uniName?: string;
  }): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UnicornMarketService.GetMarketPricePath, 'get');
    if (params) {
      rb.query('uniName', params.uniName, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * Returns the current price of a unicorn.
   *
   * Based on combinaison of the name's hashcode and a fraction of currentTimeMillis
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getMarketPrice$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getMarketPrice(params?: {

    /**
     * Unicorn&#x27;s name
     */
    uniName?: string;
  }): Observable<number> {

    return this.getMarketPrice$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
