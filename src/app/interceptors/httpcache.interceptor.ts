import {Injectable} from '@angular/core';
import {
	HttpRequest,
	HttpHandler,
	HttpEvent,
	HttpResponse, HttpErrorResponse
} from '@angular/common/http';
import {HttpCacheService} from '../services/cache.service';
import {Observable, of} from 'rxjs';
import {catchError, finalize, tap} from 'rxjs/operators';

/**
 * Intercept all http requests
 * @class {HttpRequestInterceptor}
 */
@Injectable()
export class HttpRequestInterceptor implements HttpRequestInterceptor {

	constructor(
		private _cache: HttpCacheService
	) {}

	/**
	 * When an http request starts, set loading to true. When the request is finished, set loading to false.
	 * If an error is thrown be sure loading is set to false.
	 * @param {HttpRequest} request
	 * @param {HttpHandler} next
	 * @returns {Observable<HttpEvent<any>>}
	 */
	intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        console.log('Inside  cache interceptor - ' + JSON.stringify(request))
		let cachedResponse: HttpResponse<any>;
		if (request.method === 'GET') {
			cachedResponse = this._cache.get(request);
			if (cachedResponse) {
				console.log(`Response from cache for ${request.urlWithParams}`, cachedResponse);
				// Need to return a new instance of HttpResponse else change detection won't work
				//Check timestamp. If greater then expiry remove item from cache 	

				return of(new HttpResponse<any>({ body: cachedResponse.body }))
			}
		}else if (request.method === 'POST' || request.method === 'PUT' || request.method === 'PATCH' || request.method === 'DELETE') {
			const removedFromCache = this._cache.delete(request);
			if (removedFromCache) {
				console.log(`Cleared ${request.urlWithParams} from the cache`);
			}
		}
		const reqCopy =request.clone({
			setHeaders: {
				"Authorization1": "Bearer1"
			  }
		});
		return next.handle(reqCopy)
			.pipe(
				tap<HttpEvent<any>>((httpEvent: HttpEvent<any>) => {
					console.log('httpEvent instanceof HttpResponse  -  ' + (httpEvent instanceof HttpResponse))
					if (httpEvent instanceof HttpResponse) {
						console.log('Inserting in cache ... ' + JSON.stringify(reqCopy) )
						//Set timestamp with expiry
				
				
						
                        this._cache.put(reqCopy, httpEvent);
					}
					return cachedResponse ? cachedResponse : httpEvent;
				}),
				catchError((err: HttpErrorResponse) => {
					throw err;
				}),
				finalize(() => {
				})
			)
		
	}
}