import { Component, OnInit } from '@angular/core';
import {OrdersService} from '../orders.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {
  orders: Array<any>;
  p = 1;
  constructor(public ordersService: OrdersService) {
     this.orders = [];
  }

  ngOnInit() {
    this.ordersService.getOrders().subscribe(orders => {
      this.orders = orders.orders;
    })
  }

}
