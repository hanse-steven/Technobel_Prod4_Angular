import {Component, OnInit} from '@angular/core';
import {ChildlistitemService} from "../../services/childlistitem.service";
import {faCartShopping, faTrash} from "@fortawesome/free-solid-svg-icons"
import {ActivatedRoute} from "@angular/router"
import {ChildlistitemDtoModel} from "../../models/childlistitem.dto.model"
import {ToastService} from "../../../../shared/services/toast.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss'
})
export class CartComponent implements OnInit{
    cartItems: ChildlistitemDtoModel[] = []

    constructor(
        private readonly _cli: ChildlistitemService,
        private readonly _ar: ActivatedRoute,
        private readonly _toast: ToastService,
    ) {}

    ngOnInit(): void {
        this._ar.data.subscribe((data: any) => {
            this.cartItems = data.cartItems
        })
    }

    deleteItem(id: string): void {
        this._cli.removeToCart(id)
        this.reloadItems()
    }

    reloadItems() {
        this._cli.findAllByidFromCart().subscribe({
            next: data => this.cartItems = data,
            error: _ => this._toast.showError('Impossible de rafrachir le panier')
        })
    }

    protected readonly faCartShopping = faCartShopping
    protected readonly faTrash = faTrash
}
