import { Component } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChildlistitemDtoModel} from "../../models/childlistitem.dto.model";
import {faCartPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrl: './item.component.scss'
})
export class ItemComponent {
    childlistitem! : ChildlistitemDtoModel

    constructor(
        private readonly _ar: ActivatedRoute
    )
    {
        this._ar.data.subscribe((data: any) => {
            this.childlistitem = data.childlists
        })
    }

    protected readonly faCartPlus = faCartPlus;
}
