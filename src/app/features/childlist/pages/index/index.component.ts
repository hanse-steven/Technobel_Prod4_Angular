import {Component, OnInit} from '@angular/core';
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute} from "@angular/router";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent implements OnInit{
    childlists!: ChildlistDtoModel[]

    constructor(
        private readonly _ar: ActivatedRoute
    ) {}

    ngOnInit() {
        this._ar.data.subscribe((data: any) => {
            this.childlists = data.childlists
        })
    }

    protected readonly faAlignLeft = faAlignLeft;
}
