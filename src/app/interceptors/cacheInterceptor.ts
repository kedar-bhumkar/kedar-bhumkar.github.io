
import { Injectable } from "@angular/core";
import { Observable, of, share, tap} from "rxjs";
import { HttpClient, HttpEvent, HttpHandler, HttpHeaders,HttpRequest,HttpResponse, HttpInterceptor} from "@angular/common/http";

@Injectable()
export class CacheInterceptor implements HttpInterceptor {
  private cache: Map<String, HttpResponse<any>> = new Map()
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>{
    if(req.method !== "GET") {
        return next.handle(req)
    }

    if(req.headers.get("reset")) {
        this.cache.delete(req.urlWithParams)
    }

    const cachedResponse: HttpResponse<any> = this.cache.get(req.urlWithParams)!
    if(cachedResponse) {
        return of(cachedResponse.clone())
    }else {
        return next.handle(req).pipe(
            tap((stateEvent: any) => {
                if(stateEvent instanceof HttpResponse) {
                    this.cache.set(req.urlWithParams, stateEvent.clone())
                }
            })
        ).share()
    }
  }    
}