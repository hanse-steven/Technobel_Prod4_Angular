import {Component} from '@angular/core';
import {Link} from '../../core/models/link';
import {AuthService} from "../../features/auth/services/auth.service";
import {UserTokenDtoModel} from "../../features/auth/models/user.token.dto.model";
import {faCartShopping, faHome, faList, faRightFromBracket, faUser, faUserPlus} from "@fortawesome/free-solid-svg-icons";
import {ChildlistitemService} from "../../features/childlist/services/childlistitem.service";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    currentUser: UserTokenDtoModel | undefined;
    cartLenght: number = 0

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
                url: '/childlist',
                icon: faList
            },
        ],
        right: [
            {
                title: 'Panier',
                badge: this.cartLenght,
                icon: faCartShopping,
                url: '/childlist/cart'
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

    constructor(
        private readonly _authService: AuthService,
        private readonly _cliService: ChildlistitemService
    ) {
        _authService.currentUser$.subscribe({
            next: data => {
                this.currentUser = data
                this.links = this.currentUser ? this.authenticatedNav : this.anonymousNav
            }
        })

        this.authenticatedNav.right[0].badge = this._cliService.getCart().size
    }
}
