import {Component} from '@angular/core';
import {Link} from '../../core/models/link';
import {AuthService} from "../../features/auth/services/auth.service";
import {UserTokenDtoModel} from "../../features/auth/models/user.token.dto.model";
import {faCartShopping, faHome, faList, faRightFromBracket, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    links: Link = {
        left: [],
        right: []
    }

    private anonymousNav: Link = {
        left: [
            {
                title: 'Accueil',
                url: '/',
                icon: faHome
            },
        ],
        right: [
            {
                title: 'Inscription',
                url: '/auth/register',
                icon: faUserPlus
            },
            {
                title: 'Connexion',
                url: '/auth/login',
                icon: faUser
            },
        ]
    }

    private authenticatedNav: Link = {
        left: [
            {
                title: 'Listes de naissances',
                url: '/childlist/',
                icon: faList
            },
        ],
        right: [
            {
                title: 'Panier',
                icon: faCartShopping,
            },
            {
                title: 'Compte',
                url: '/childlist/account',
                icon: faUser,
            },
            {
                title: 'Logout',
                icon: faRightFromBracket,
                action: () => this._authService.logout()
            },
        ]
    }

    currentUser: UserTokenDtoModel | undefined;

    constructor(
        private readonly _authService: AuthService,
    ) {
        _authService.currentUser$.subscribe({
            next: data => {
                this.currentUser = data
                this.links = this.currentUser ? this.authenticatedNav : this.anonymousNav
            }
        })
    }
}
