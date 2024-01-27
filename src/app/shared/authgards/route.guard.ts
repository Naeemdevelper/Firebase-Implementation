import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const routeGuard: CanActivateFn = (route, state) => {
  const user = localStorage?.getItem('accessToken');
  const router= inject(Router)
  if (user?.length) {
    router.navigate(['/home'])
    return false;
  }
  return true;
};
