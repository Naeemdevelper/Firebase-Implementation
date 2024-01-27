import { Routes } from '@angular/router';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterComponent } from './components/register/register.component';
import { authGuard } from './shared/authgards/auth.guard';
import { HomeComponent } from './components/home/home.component';
import { routeGuard } from './shared/authgards/route.guard';
import { ForgetPasswordComponent } from './components/forget-password/forget-password.component';
import { VerfyEmailComponent } from './components/verfy-email/verfy-email.component';

export const routes: Routes = [
  

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginFormComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'rigister',
    component: RegisterComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'forget',
    component: ForgetPasswordComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'verify',
    component: VerfyEmailComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'rigister',
    component: RegisterComponent,
    canActivate: [routeGuard],
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [authGuard],
  }
  
 
];
