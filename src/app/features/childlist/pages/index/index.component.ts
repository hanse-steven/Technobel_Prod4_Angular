import {Component} from '@angular/core';
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute} from "@angular/router";
import {environment} from "../../../../../environments/environment";
import {faAlignLeft} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
    childlists!: ChildlistDtoModel[]

    constructor(
        private readonly _ar: ActivatedRoute
    ) {
        this._ar.data.subscribe((data: any) => {
            this.childlists = data.childlists
        })
    }


    protected readonly environment = environment;
    protected readonly faAlignLeft = faAlignLeft;
}
