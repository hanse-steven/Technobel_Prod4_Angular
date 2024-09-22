import {HttpInterceptorFn} from '@angular/common/http'
import {UserTokenDtoModel} from "../../features/auth/models/user.token.dto.model"
import {AuthService} from "../../features/auth/services/auth.service"
import {inject} from "@angular/core"
import {catchError, throwError} from "rxjs";

export const jwtInterceptor: HttpInterceptorFn = (req, next) => {
    const authService: AuthService = inject(AuthService)
    let userToken: UserTokenDtoModel | undefined = authService.currentUser
    if (userToken) {
        let token = userToken.access

        if (token) {
            if (token !== '') {
                let requestClone = req.clone({
                    headers: req.headers.append('Authorization', 'Bearer ' + token)
                })
                return next(requestClone).pipe(catchError(err => {
                    if (err.status === 401) {
                        authService.logout()
                    }
                    return throwError(err)
                }))
            }
        }
    }
    return next(req)
}
