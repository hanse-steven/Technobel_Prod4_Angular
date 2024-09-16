import {Component} from '@angular/core';
import {Link} from '../../core/models/link';
import {AuthService} from "../../features/auth/services/auth.service";
import {UserTokenDtoModel} from "../../features/auth/models/user.token.dto.model";
import {
    faHome,
    faList,
    faMinus,
    faPenToSquare,
    faPlus,
    faRightFromBracket, faUser, faUserPlus
} from "@fortawesome/free-solid-svg-icons";

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss',
})
export class HeaderComponent {
    links: Link[] = []

    private commonNav: Link[] = []

    private anonymousNav: Link[] = [
        ...this.commonNav,
        {
            title: 'Accueil',
            url: '/',
            icon: faHome
        },
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
    ];

    private authenticatedNav: Link[] = [
        ...this.commonNav,
        {
            title: 'Listes de naissances',
            url: '/childlist/',
            icon: faList
        },
        {
            title: 'Ajouter',
            icon: faPlus
        },
        {
            title: 'Editer liste',
            icon: faPenToSquare
        },
        {
            title: 'Supprimer',
            icon: faMinus
        },
        {
            title: 'Logout',
            icon: faRightFromBracket,
            action: () => this._authService.logout()
        },
    ];

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

    protected readonly faPlus = faPlus;
}
