import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChildlistitemDtoModel} from "../../models/childlistitem.dto.model";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {ChildlistitemService} from "../../services/childlistitem.service";
import {ToastService} from "../../../../shared/services/toast.service"

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
    idItem : string
    childlistitem! : ChildlistitemDtoModel

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _cli: ChildlistitemService,
        private readonly _toast: ToastService
    )
    {
        this._ar.data.subscribe((data: any) => {
            this.childlistitem = data.childlists
        })
        this.idItem = this._ar.snapshot.params['id']
    }

    addToCart(id:string) {
        this._cli.addToCart(id)
        this._toast.show({template: standardTpl , classname: 'bg-success text-light', delay: 10000 })
    }

    protected readonly faCartPlus = faCartPlus;
}
