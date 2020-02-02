import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {UrlJSON} from '../utils/UrlJSON';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private http: HttpClient) { }

  getOrders() {
    return this.http.get(`${UrlJSON.orderUrl}/getOrders`);
  }

  getOrderDetailsById(orderId) {
    return this.http.get(`${UrlJSON.orderUrl}/getOrderDetailsById/${orderId}`);
  }

}
