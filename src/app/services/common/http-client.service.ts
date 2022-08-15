import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient: HttpClient, @Inject("baseUrl") private baseUrl: string) { }

  private url(requestParameter: Partial<RequestParameter>): string {
    return `${requestParameter.baseUrl ? requestParameter.baseUrl : this.baseUrl}/${requestParameter.controller}${requestParameter.action ? `/ ${requestParameter.action}` : ""}`;
    //eğer requestParameter içindeki baseUrl doluysa onu kullan (yani özel bir base url'e istek atıyorumdur) değilse ana modülden gelen base url'i kullan. / hangi controller'a istek yapılcaksa , ${requestParameter.action ? `/ ${requestParameter.action}`:"" = eğer action parametresi doluysa / action adı, eğer boşsa ""
  }

  get<T>(requestParameter: Partial<RequestParameter>, id?: string): Observable<T> {
    let url: string = "";
    if (requestParameter.fullEndPoint)
      url = requestParameter.fullEndPoint;
    else
      url = `${this.url(requestParameter)}${id ? `/${id}` : ""}`;
    return this.httpClient.get<T>(url, { headers: requestParameter.headers })
  }

  post<T>(requestParameter:Partial<RequestParameter>, body:Partial<T>):Observable<T> {
    let url : string = "";
    if(requestParameter.fullEndPoint)
      url= requestParameter.fullEndPoint;
    else
    url=`${this.url(requestParameter)}`

    return this.httpClient.post<T>(url,body,{headers: requestParameter.headers});
  }

  put<T>(requestParameter: Partial<RequestParameter>,body: Partial<T>):Observable<T> {
    let url : string="";
    if(requestParameter.fullEndPoint)
      url=requestParameter.fullEndPoint
    else
    url= `${this.url(requestParameter)}`;

    return this.httpClient.put<T>(url,body,{headers:requestParameter.headers})
  }

  delete<T>(requestParameter: Partial<RequestParameter>,id: string):Observable<T> {
    let url : string ="";
    if(requestParameter.fullEndPoint)
     url = requestParameter.fullEndPoint
    else
    url = `${this.url(requestParameter)}/${id}`;

    return this.httpClient.delete<T>(url,{headers:requestParameter.headers});
  }
}

export class RequestParameter {
  controller?: string;
  action?: string;
  id?: string;

  headers?: HttpHeaders;
  baseUrl?: string;
  fullEndPoint?: string;
}