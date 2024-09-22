import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {LoginForm} from "../../forms/login.forms";
import {ToastService} from "../../../../shared/services/toast.service";
import {faRightToBracket, faSave} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

    loginForm : FormGroup

    constructor(
        private readonly _router: Router,
        private readonly _authService: AuthService,
        private readonly _fb: FormBuilder,
        private readonly _toast: ToastService
    ) {
        this.loginForm = this._fb.group({
            ...LoginForm
        })
    }

    submit() {
        this.loginForm.markAsTouched()

        if (!this.loginForm.valid) return

        this._authService.login(this.loginForm.value).subscribe({
            next: _ => {
                this._router.navigate(['/childlist'])
            },
            error: err => {
                this._toast.showError(err.error.detail || 'Connexion impossible: erreur inconnu', {header: 'Authentification'})
            }
        })
    }

    protected readonly faSave = faSave;
    protected readonly faRightToBracket = faRightToBracket;
}
