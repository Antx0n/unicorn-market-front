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

import { Unicorn } from '../models/unicorn';

@Injectable({
  providedIn: 'root',
})
export class UnicornOfferingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation getOffers
   */
  static readonly GetOffersPath = '/unicorn/offers';

  /**
   * Returns all the Unicorns currently offered.
   *
   * Each unicron as a unique name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getOffers()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOffers$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Unicorn>>> {

    const rb = new RequestBuilder(this.rootUrl, UnicornOfferingService.GetOffersPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<Unicorn>>;
      })
    );
  }

  /**
   * Returns all the Unicorns currently offered.
   *
   * Each unicron as a unique name
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `getOffers$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getOffers(params?: {
  }): Observable<Array<Unicorn>> {

    return this.getOffers$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Unicorn>>) => r.body as Array<Unicorn>)
    );
  }

  /**
   * Path part for operation postOffer
   */
  static readonly PostOfferPath = '/unicorn/offer';

  /**
   * Creates an offering for a new unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `postOffer()` instead.
   *
   * This method doesn't expect any request body.
   */
  postOffer$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, UnicornOfferingService.PostOfferPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Creates an offering for a new unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `postOffer$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  postOffer(params?: {
  }): Observable<void> {

    return this.postOffer$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation patchOffer
   */
  static readonly PatchOfferPath = '/unicorn/offer/{unicorn_name}';

  /**
   * Updates the price of an existing unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `patchOffer()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchOffer$Response(params: {

    /**
     * As unicorns are unique, their name are somehow ids
     */
    unicorn_name: string;

    /**
     * New basePrice
     */
    body: { 'basePrice'?: number }
  }): Observable<StrictHttpResponse<Unicorn>> {

    const rb = new RequestBuilder(this.rootUrl, UnicornOfferingService.PatchOfferPath, 'patch');
    if (params) {
      rb.path('unicorn_name', params.unicorn_name, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Unicorn>;
      })
    );
  }

  /**
   * Updates the price of an existing unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `patchOffer$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  patchOffer(params: {

    /**
     * As unicorns are unique, their name are somehow ids
     */
    unicorn_name: string;

    /**
     * New basePrice
     */
    body: { 'basePrice'?: number }
  }): Observable<Unicorn> {

    return this.patchOffer$Response(params).pipe(
      map((r: StrictHttpResponse<Unicorn>) => r.body as Unicorn)
    );
  }

}
