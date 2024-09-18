import {Validators} from "@angular/forms";

export const NewitemForm = {
    list: [null, [Validators.required]],
    name: [null, [Validators.required]],
    price: [null, [Validators.required]],
    picture: [null, [Validators.required]],
    description: [null, []]
}
