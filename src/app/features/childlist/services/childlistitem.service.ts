import {Injectable, OnDestroy, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import {environment} from "../../../../environments/environment";
import {ChildlistitemDtoModel} from "../models/childlistitem.dto.model";
import {ChildlistitemFormModel} from "../models/childlistitem.form.model";
import {ToastService} from "../../../shared/services/toast.service";

@Injectable({
    providedIn: 'root'
})
export class ChildlistitemService implements OnInit{

    cartItem$!: BehaviorSubject<Set<string>>

    constructor(
        private readonly _http: HttpClient,
        private readonly _toast: ToastService,
    ) {}

    ngOnInit(): void {
        let jsonCart = localStorage.getItem('cart')
        this.cartItem$ = new BehaviorSubject<Set<string>>(
            jsonCart ? new Set<string>(JSON.parse(jsonCart)) : new Set<string>()
        )
    }

    findById(id: string): Observable<ChildlistitemDtoModel> {
        return this._http.get<ChildlistitemDtoModel>(environment.childListItem + '?childlistitem_id=' + id)
    }

    findAllByidFromCart(): Observable<ChildlistitemDtoModel[]> {
        return this.findAllByid(Array.from(this.cartItem$.value.values()))
    }

    findAllByid(ids: string[]): Observable<ChildlistitemDtoModel[]> {
        return this._http.post<ChildlistitemDtoModel[]>(environment.childListItemBulk, ids)
    }

    buy(id: string): Observable<string>{
        const options = {
            body: { childlistitem_id: id },
            responseType: 'text' as 'text'
        }
        return this._http.patch<string>(environment.childListItem, options)
    }

    save(item: ChildlistitemFormModel): Observable<string> {
        let formatToAPI = {
            childlist_id : item.list,
            name: item.name,
            price: item.price,
            image: item.picture,
            description: item.description || ''
        }
        return this._http.post<string>(environment.childListItem, formatToAPI)
    }

    addToCart(id: string): void {
        const currentCart = this.cartItem$.value
        currentCart.add(id)
        this.cartItem$.next(currentCart)
        localStorage.setItem('cart', JSON.stringify(Array.from(currentCart)))
        this._toast.showSuccess('Objet ajouté', {header: 'Panier'})
    }

    removeToCart(id: string): void {
        const currentCart = this.cartItem$.value
        currentCart.delete(id)
        this.cartItem$.next(currentCart)
        localStorage.setItem('cart', JSON.stringify(Array.from(currentCart)))
        this._toast.showSuccess('Objet supprimé', {header: 'Panier'})
    }
}
