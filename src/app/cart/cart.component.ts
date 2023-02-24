import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { IMenu } from '../IMenu';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart : Array<IMenu> = [];
  constructor(private cs:CartService){}

  ngOnInit(): void {
    this.cart = this.cs.getCart();
  }
}
