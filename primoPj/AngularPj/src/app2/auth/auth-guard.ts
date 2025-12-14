import { inject } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChildFn, CanActivateFn, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './authService';


export const authGuard: CanActivateFn = (route, state) => {
  const authServzio = inject(AuthService);

  return authServzio.isAuthenticated();
};

export const authChildGuard: CanActivateChildFn = (childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot) => {
  const authServzio = inject(AuthService);

  return authServzio.isRoleAdmin();
};



