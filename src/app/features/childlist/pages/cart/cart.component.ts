import { Component } from '@angular/core';
import {ChildlistitemService} from "../../services/childlistitem.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent {
    cartItems: Set<string>

    constructor(
        private readonly _cli: ChildlistitemService
    ) {
        this.cartItems = this._cli.getCart()
        console.log(this._cli.getCart())
    }
}
