import {Component} from '@angular/core';
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

    constructor(private readonly _authService: AuthService) {}

    get currentUser() {
        return JSON.parse(atob(this._authService.currentUser!.access!.split('.')[1])).user_name
    }

    logout() {
        this._authService.logout()
    }
}
