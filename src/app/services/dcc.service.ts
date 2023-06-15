import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class DCCService {
  //private baseUrl = "https://springmongodb.onrender.com/";
  private baseUrl =  "http://localhost:8080/";
  httpOptions = {
    headers: new HttpHeaders({ "Content-Type": "application/json" }),
  };
  constructor(private http: HttpClient) {}

  getLandingPageData(id:any, cmpType:any): Observable<any> {
    console.log("Inside getLandingPageData.....");
    //@todo optimize to avoid repeated ws calls on multiple invocations
    //https://blog.danieleghidoli.it/2020/10/28/angular-how-to-prevent-duplicated-http-requests/

    return this.http.get<any>(this.baseUrl + "user?userId=" + id + "&cmpType="+cmpType);
  }

  
  
  getAppSelectorData(id:any): Observable<any> {
    
    console.log("Inside getAppSelectorData.....");
    //@todo optimize to avoid repeated ws calls on multiple invocations
    //https://blog.danieleghidoli.it/2020/10/28/angular-how-to-prevent-duplicated-http-requests/

    return this.http.get<any>(this.baseUrl + "user/" + id);
  }

  getDocs(docType:any): Observable<any> {
    
    console.log("Inside getDocs.....");
    //@todo optimize to avoid repeated ws calls on multiple invocations
    //https://blog.danieleghidoli.it/2020/10/28/angular-how-to-prevent-duplicated-http-requests/

    return this.http.get<any>(this.baseUrl + "docs?name=" + docType);
  }

}
