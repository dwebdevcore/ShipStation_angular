import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable()
export class OrdersService {

  constructor(private httpClient: HttpClient) { }

  getOrders(): any {
    return this.httpClient.get('https://private-anon-826afe648b-shipstation.apiary-mock.com/orders')
      .pipe(map(res => res));
  }
}
