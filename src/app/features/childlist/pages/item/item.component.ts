import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChildlistitemDtoModel} from "../../models/childlistitem.dto.model";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";
import {ChildlistitemService} from "../../services/childlistitem.service";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent implements OnInit{
    hideCardButton = false
    childlistitem! : ChildlistitemDtoModel

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _cli: ChildlistitemService
    ) {}

    ngOnInit() {
        this._ar.data.subscribe((data: any) => {
            this.childlistitem = data.item
        })

        this.hideCardButton = this._ar.snapshot.queryParams['hideCart'] || false
    }

    addToCart(id:string) {
        this._cli.addToCart(id)
    }

    protected readonly faCartPlus = faCartPlus;
}
