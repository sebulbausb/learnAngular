import { Component, OnInit } from '@angular/core';

import { Product, products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent implements OnInit {
  product: Product | undefined;
  public productStockStatus!: string;

  products = [...products];

  share() {
    window.alert('wwwooo');
  }

  public displayStockStatus() {
    if (this.product?.stockStatus) {
      return `In stock`;
    } else {
      return `Out of stock`;
    }
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  ngOnInit(): void {
    this.productStockStatus = this.displayStockStatus();
  }
}

/*
Copyright Google LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at https://angular.io/license
*/
