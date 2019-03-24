import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const SERVER_URL = 'http://localhost:3000/subscription';
const SERVER_URL_SEND_NOTIFICATION = 'http://localhost:3000/sendNotification';

@Injectable({
  providedIn: 'root'
})
export class PushNotificationService {
  constructor(private http: HttpClient) {}

  public sendSubscriptionToTheServer(subscription: PushSubscription) {
    return this.http.post(SERVER_URL, subscription);
  }

  public sendNotificationToTheClient() {
    return this.http.post(SERVER_URL_SEND_NOTIFICATION,'');
  }
}
