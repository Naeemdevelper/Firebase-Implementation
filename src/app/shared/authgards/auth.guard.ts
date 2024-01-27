import { CanActivateFn, Router } from '@angular/router';
export const authGuard: CanActivateFn = (route, state) => {
  const user = localStorage?.getItem('accessToken');
  if (user?.length) {
    return true;
  } else {
    return false;
  }
};
