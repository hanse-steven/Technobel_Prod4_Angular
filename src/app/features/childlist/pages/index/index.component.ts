import {Component} from '@angular/core';
import {ChildlistShortDtoModel} from "../../models/childlist.short.dto.model";
import {ActivatedRoute} from "@angular/router";

@Component({
    selector: 'app-index',
    templateUrl: './index.component.html',
    styleUrl: './index.component.scss'
})
export class IndexComponent {
    childlists!: ChildlistShortDtoModel[]

    constructor(
        private readonly _ar: ActivatedRoute
    ) {
        this._ar.data.subscribe((data: any) => {
            this.childlists = data.childlists
        })
    }
}
