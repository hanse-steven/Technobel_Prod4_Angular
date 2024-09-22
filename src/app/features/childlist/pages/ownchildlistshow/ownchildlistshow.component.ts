import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-ownchildlistshow',
  templateUrl: './ownchildlistshow.component.html',
  styleUrl: './ownchildlistshow.component.scss'
})
export class OwnchildlistshowComponent implements OnInit{
    childlist! : ChildlistDtoModel

    constructor(
        private readonly _ar: ActivatedRoute
    ) {}

    ngOnInit() {
        this._ar.data.subscribe((data: any) => {
            this.childlist = data.childlist
        })
    }

    get countBought() {
        return this.childlist.items.filter(item => item.boughtBy).length
    }

    get countNotBought() {
        return this.childlist.items.filter(item => !item.boughtBy).length
    }

    protected readonly faAlignLeft = faAlignLeft;
}


