import {CanActivateFn, Router} from '@angular/router';
import {AuthService} from "../../features/auth/services/auth.service";
import {inject} from "@angular/core";

export const anonymousGuard: CanActivateFn = () => {
    const authService: AuthService = inject(AuthService)
    if (authService.currentUser) {
        inject(Router).navigate(['/childlist'])
    }
    return !authService.currentUser
}

