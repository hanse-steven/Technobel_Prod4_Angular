import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {LoginForm} from "../../forms/login.forms";

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
        private readonly _fb: FormBuilder
    ) {
        this.loginForm = this._fb.group({
            ...LoginForm
        })
    }

    submit() {
        this.loginForm.markAsTouched()

        if (!this.loginForm.valid) return

        this._authService.login(this.loginForm.value).subscribe({
            next: datas => {
                this._router.navigate(['/'])
            },
            error: err => {
                console.log(err)
            }
        })
    }




}
