import { Component } from '@angular/core';
import {faSave} from "@fortawesome/free-solid-svg-icons";
import {ChildlistDtoModel} from "../../models/childlist.dto.model";
import {ActivatedRoute, Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {NewitemForm} from "../../forms/newitem.form";
import {ChildlistitemService} from "../../services/childlistitem.service";
import {ChildlistitemFormModel} from "../../models/childlistitem.form.model";

@Component({
  selector: 'app-newchildlist',
  templateUrl: './newchildlist.component.html',
  styleUrl: './newchildlist.component.scss'
})
export class NewchildlistComponent {

    newitemForm: FormGroup
    imageBase64!: string

    childlists!: ChildlistDtoModel[]

    constructor(
        private readonly _ar: ActivatedRoute,
        private readonly _fb: FormBuilder,
        private readonly _cli: ChildlistitemService,
        private readonly _router: Router

    ) {
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

        this._cli.save(this.newitemForm.value).subscribe({
            next: data => {
                this._router.navigate(['childlist/ownchildlist/'+this.newitemForm.value.list])
            },
            error: err => {
                console.log(err)
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
