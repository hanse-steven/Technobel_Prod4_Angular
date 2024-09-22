import {Injectable} from '@angular/core'
import {UserTokenDtoModel} from "../models/user.token.dto.model"
import {BehaviorSubject, Observable, tap} from "rxjs"
import {HttpClient} from "@angular/common/http"
import {Router} from "@angular/router"
import {RegisterFormModel} from "../models/register.form.model"
import {LoginFormModel} from "../models/login.form.model"
import {environment} from "../../../../environments/environment"
import {ToastService} from "../../../shared/services/toast.service";

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    private _currentUser$: BehaviorSubject<UserTokenDtoModel | undefined>

    constructor(
        private readonly _http: HttpClient,
        private readonly _router: Router,
        private readonly _toast: ToastService
    ) {
        let jsonUser = localStorage.getItem('currentUser')
        this._currentUser$ = new BehaviorSubject<UserTokenDtoModel | undefined>(
            jsonUser ? JSON.parse(jsonUser) : undefined
        )
    }

    register(form: RegisterFormModel): Observable<UserTokenDtoModel> {
        return this._http.post<UserTokenDtoModel>(environment.registerUser, form).pipe(
            tap(_ => {
                this._toast.showSuccess('Création du compte réussie', {header: 'Authentification'})
            })
        )
    }

    login(form: LoginFormModel): Observable<UserTokenDtoModel> {
        return this._http.post<UserTokenDtoModel>(environment.loginUser, form).pipe(
            tap(user => {
                this._currentUser$.next(user);
                localStorage.setItem("currentUser", JSON.stringify(user))
                this._toast.showSuccess('Connexion réussie', {header: 'Authentification'})
            }),
        )
    }

    logout() {
        this._currentUser$.next(undefined);
        localStorage.removeItem("currentUser")
        this._toast.showSuccess('Déconnexion réussie', {header: 'Authentification'})
        this._router.navigate(["/auth/login"])
    }

    get currentUser(): UserTokenDtoModel | undefined {
        return this._currentUser$.value
    }

    get currentUser$(): Observable<UserTokenDtoModel | undefined> {
        return this._currentUser$.asObservable()
    }
}
