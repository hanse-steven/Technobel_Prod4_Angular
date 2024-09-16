import {Validators} from "@angular/forms";

export const RegisterForm = {
    username: [null, [Validators.required]],
    password: [null, [Validators.required]],
    confirm_password: [null, [Validators.required]],
}
