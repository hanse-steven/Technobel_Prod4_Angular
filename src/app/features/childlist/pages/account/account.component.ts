import { Component } from '@angular/core';
import {AuthService} from "../../../auth/services/auth.service";
import {faCirclePlus, faList, faRightFromBracket} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrl: './account.component.scss'
})
export class AccountComponent {
    protected readonly faRightFromBracket = faRightFromBracket;
    protected readonly faCirclePlus = faCirclePlus;
    protected readonly faList = faList;

    constructor(
        private readonly _authService: AuthService,
    ) {
    }

    logout() {
        this._authService.logout()
    }


}
