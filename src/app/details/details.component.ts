import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { CartService } from '../cart.service';
import { IMenu } from '../IMenu';
import { menu } from '../menu/menu';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  menu: IMenu = {} as IMenu;
  id: number = 0;

  constructor (private route: ActivatedRoute,private cs: CartService ){ }

  


  ngOnInit(): void {
    this.route.params.subscribe((params: Params) => {
      this.id = +params['id'];
      this.menu = menu[this.id];
    });
  }
  addToCart(obj: IMenu) {
    alert("added");
    this.cs.addToCart(obj);
     }
  
}
