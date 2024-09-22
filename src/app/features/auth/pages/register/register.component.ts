import { Component } from '@angular/core'
import {FormBuilder, FormGroup} from "@angular/forms"
import {AuthService} from "../../services/auth.service"
import {Router} from "@angular/router"
import {RegisterForm} from "../../forms/register.form"
import {ToastService} from "../../../../shared/services/toast.service";
import {faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

    registerForm: FormGroup

    constructor(
        private readonly _router: Router,
        private readonly _authService: AuthService,
        private readonly _fb: FormBuilder,
        private readonly _toast: ToastService
    ) {
        this.registerForm = this._fb.group({...RegisterForm})
    }

    submit() {
        this.registerForm.markAsTouched()

        if (!this.registerForm.valid) return

        this._authService.register(this.registerForm.value).subscribe({
            next: _ => {
                this._router.navigate(['/auth/login'])
            },
            error: err => {
                let error = ''

                for (const key in err.error) {
                    error += ' ' + err.error[key]
                }

                this._toast.showError('Impossible de créer le compte' + error, {header: 'Authentification'})
            }
        })
    }

    protected readonly faUserPlus = faUserPlus;
}
