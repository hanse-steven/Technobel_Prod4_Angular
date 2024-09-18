import { Component } from '@angular/core';
import {faAlignLeft, faEye, faSave, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";
import {NewlistForm} from "../../forms/newlist.form";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ChildlistService} from "../../services/childlist.service";

@Component({
  selector: 'app-ownchildlist',
  templateUrl: './ownchildlist.component.html',
  styleUrl: './ownchildlist.component.scss'
})
export class OwnchildlistComponent {
    iduser!: number
    childlists!: ChildlistDtoModel[]
    newlistForm: FormGroup

    protected readonly faEye = faEye;
    protected readonly faXmark = faXmark;
    protected readonly faSave = faSave;

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _as: AuthService,
        private readonly _cl: ChildlistService,
        private readonly _fb: FormBuilder,
        private readonly _router: Router
    ) {
        this._ar.data.subscribe((data: any) => {
            this.childlists = data.childlists
            this.iduser = JSON.parse(atob(this._as.currentUser!.access!.split('.')[1])).user_id
        })

        this.newlistForm = this._fb.group({
            ...NewlistForm
        })
    }

    relaodList() {
        this._cl.findAll().subscribe({
            next: data => {
                this.childlists = data
                this.newlistForm.reset()
            },
            error: err => {
                console.log(err)
            }
        })
    }

    deleteList(id: string) {
        this._cl.delete(id).subscribe({
            next: data => {
                this.relaodList()
            },
            error: err => {
                console.log(err)
            }
        })
    }

    submit() {
        this.newlistForm.markAsTouched()

        if (!this.newlistForm.valid) return

        this._cl.save(this.newlistForm.value).subscribe({
            next: data => {
                this.relaodList()
            },
            error: err => {
                console.log(err)
            }
        })
    }

}
