import { Component } from '@angular/core';
import { menu } from './menu';
import { IMenu } from '../IMenu'
import { CartService } from '../cart.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
 menu: Array<IMenu> = menu;

 constructor(private cs: CartService) {

 }

 addToCart(obj: IMenu) {
alert("added");
this.cs.addToCart(obj);
 }
}
