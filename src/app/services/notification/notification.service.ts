import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private http: HttpClient) { }


  public sendNotification(notify: any) {
    var setHeaders = new HttpHeaders().set("Authorization", "Basic " + environment.authorizationSecret);
    const httpOptions = {
      headers: setHeaders
    };

    return this.http.post(`${environment.apiUrl}/send-notification`, notify, httpOptions).toPromise();
  }
}
