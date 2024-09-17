import {Validators} from "@angular/forms";

export const NewlistForm = {
    firstname: [null, [Validators.required]],
    lastname: [null, [Validators.required]],
    birthdate: [null, [Validators.required]],
}
