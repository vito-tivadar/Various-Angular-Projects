import { Component, OnInit } from '@angular/core';
import { AuthService } from './../common/services/auth.service';
import { OrdersService } from './../common/services/orders.service';
import { Router } from '@angular/router';
import { userTokenInfo } from '../common/types/object-types';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  constructor(private router: Router, private ordersService: OrdersService) {}

  orders: any = [];

  ngOnInit(): void {
    this.ordersService.getOrders().subscribe({
      next: (response: any) => {
        this.orders = response;
      },
      error: (error: any) => {
        this.orders = [];
      },
    });
  }
}
