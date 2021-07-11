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
export class AntxonSUnicornOfferingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation unicornOffersGet
   */
  static readonly UnicornOffersGetPath = '/unicorn/offers';

  /**
   * Returns all the Unicorns currently offered.
   *
   * Each unicron as a unique name
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unicornOffersGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  unicornOffersGet$Response(params?: {
  }): Observable<StrictHttpResponse<Array<Unicorn>>> {

    const rb = new RequestBuilder(this.rootUrl, AntxonSUnicornOfferingService.UnicornOffersGetPath, 'get');
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
   * To access the full response (for headers, for example), `unicornOffersGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unicornOffersGet(params?: {
  }): Observable<Array<Unicorn>> {

    return this.unicornOffersGet$Response(params).pipe(
      map((r: StrictHttpResponse<Array<Unicorn>>) => r.body as Array<Unicorn>)
    );
  }

  /**
   * Path part for operation unicornOfferPost
   */
  static readonly UnicornOfferPostPath = '/unicorn/offer';

  /**
   * Creates an offering for a new unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unicornOfferPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  unicornOfferPost$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AntxonSUnicornOfferingService.UnicornOfferPostPath, 'post');
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
   * To access the full response (for headers, for example), `unicornOfferPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unicornOfferPost(params?: {
  }): Observable<void> {

    return this.unicornOfferPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation unicornOfferUnicornNamePatch
   */
  static readonly UnicornOfferUnicornNamePatchPath = '/unicorn/offer/{unicorn_name}';

  /**
   * Updates the price of an existing unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `unicornOfferUnicornNamePatch()` instead.
   *
   * This method doesn't expect any request body.
   */
  unicornOfferUnicornNamePatch$Response(params: {

    /**
     * As unicorns are unique, their name are somehow ids
     */
    unicorn_name: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AntxonSUnicornOfferingService.UnicornOfferUnicornNamePatchPath, 'patch');
    if (params) {
      rb.path('unicorn_name', params.unicorn_name, {});
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
   * Updates the price of an existing unicorn.
   *
   * As a unicorn is unique, this equivalent to creating a new product
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `unicornOfferUnicornNamePatch$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  unicornOfferUnicornNamePatch(params: {

    /**
     * As unicorns are unique, their name are somehow ids
     */
    unicorn_name: string;
  }): Observable<void> {

    return this.unicornOfferUnicornNamePatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
