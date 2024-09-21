import {Component, OnInit} from '@angular/core';
import {faEye, faSave, faXmark} from "@fortawesome/free-solid-svg-icons";
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute} from "@angular/router";
import {AuthService} from "../../../auth/services/auth.service";
import {NewlistForm} from "../../forms/newlist.form";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ChildlistService} from "../../services/childlist.service";
import {ToastService} from "../../../../shared/services/toast.service";

@Component({
  selector: 'app-ownchildlist',
  templateUrl: './ownchildlist.component.html',
  styleUrl: './ownchildlist.component.scss'
})
export class OwnchildlistComponent implements OnInit{
    iduser!: number
    childlists!: ChildlistDtoModel[]
    newlistForm!: FormGroup

    protected readonly faEye = faEye;
    protected readonly faXmark = faXmark;
    protected readonly faSave = faSave;

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _as: AuthService,
        private readonly _cl: ChildlistService,
        private readonly _fb: FormBuilder,
        private readonly _toast: ToastService
    ) {}

    ngOnInit() {
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
            error: _ => {
                this._toast.showError('Impossible d\'actualiser la liste des listes', {header: 'Gestionnaire de listes'})
            }
        })
    }

    deleteList(id: string) {
        this._cl.delete(id).subscribe({
            next: _ => {
                this.relaodList()
            },
            error: _ => {
                this._toast.showError('Impossible de supprimer la liste', {header: 'Gestionnaire de listes'})
            }
        })
    }

    submit() {
        this.newlistForm.markAsTouched()

        if (!this.newlistForm.valid) return

        this._cl.save(this.newlistForm.value).subscribe({
            next: _ => {
                this.relaodList()
            },
            error: _ => {
                this._toast.showError('Impossible de créer une liste', {header: 'Gestionnaire de listes'})
            }
        })
    }

}
