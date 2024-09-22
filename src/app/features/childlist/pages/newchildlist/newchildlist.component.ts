import {Component, OnInit} from '@angular/core';
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NewitemForm} from "../../forms/newitem.form";
import {ChildlistitemService} from "../../services/childlistitem.service";
import {ToastService} from "../../../../shared/services/toast.service";

@Component({
  selector: 'app-newchildlist',
  templateUrl: './newchildlist.component.html',
  styleUrl: './newchildlist.component.scss'
})
export class NewchildlistComponent implements OnInit{

    newitemForm!: FormGroup
    imageBase64!: string

    childlists!: ChildlistDtoModel[]

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _fb: FormBuilder,
        private readonly _cli: ChildlistitemService,
        private readonly _router: Router,
        private readonly _toast: ToastService
    ) {}

    ngOnInit() {
        this._ar.data.subscribe((data: any) => {
            this.childlists = data.childlists
        })

        this.newitemForm = this._fb.group({...NewitemForm})
    }

    submit() {
        if (this.newitemForm.invalid) {
            this.newitemForm.markAllAsTouched()
            return;
        }

        this.newitemForm.value.picture = this.imageBase64

        let childlist = this.childlists.find( cl => cl.childlist_id === this.newitemForm.value.list)!
        this._cli.save(this.newitemForm.value).subscribe({
            next: _ => {
                this._toast.showSuccess('Objet ajouté à la liste', {header: `Liste de ${childlist.firstname} ${childlist.lastname}`})
                this._router.navigate(['childlist/ownchildlist/'+this.newitemForm.value.list])
            },
            error: _ => {
                this._toast.showError('Impossible d\'ajouter cet objet à la liste', {header: `Liste de ${childlist.firstname} ${childlist.lastname}`})
            }
        })
    }

    onFileSelected(event: Event) {
        const input = event.target as HTMLInputElement

        if (input.files && input.files.length > 0) {
            const reader = new FileReader()
            reader.onload = () => {
                this.imageBase64 = reader.result as string
            }
            reader.readAsDataURL(input.files[0])
        }
    }

    protected readonly faSave = faSave;
}
