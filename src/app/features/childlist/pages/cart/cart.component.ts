import {Component, OnInit} from '@angular/core';
import {ChildlistitemService} from "../../services/childlistitem.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
    cartItems!: Set<string>

    constructor(
        private readonly _cli: ChildlistitemService
    ) {}

    ngOnInit(): void {
        this._cli.cartItem$.subscribe({
            next: value => this.cartItems = value
        })
    }
}
