import { Component } from '@angular/core';
import {faAlignLeft, faEye, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";

@Component({
  selector: 'app-ownchildlist',
  templateUrl: './ownchildlist.component.html',
  styleUrl: './ownchildlist.component.scss'
})
export class OwnchildlistComponent {
    iduser!: number
    childlists!: ChildlistDtoModel[]

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _as: AuthService
    ) {
        this._ar.data.subscribe((data: any) => {
            this.childlists = data.childlists
            this.iduser = JSON.parse(atob(this._as.currentUser!.access!.split('.')[1])).user_id
        })
    }

    protected readonly faAlignLeft = faAlignLeft;
    protected readonly faEye = faEye;
    protected readonly faXmark = faXmark;
}
