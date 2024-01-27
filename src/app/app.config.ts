import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire/compat';
import { environment } from '../environments/environment';
import { SharedModule } from './shared/shared.module';


export const appConfig: ApplicationConfig = {
  providers: [
    SharedModule,
    provideRouter(routes),
    provideClientHydration(),
    importProvidersFrom([
      AngularFireModule.initializeApp(environment.firebase),
    ]),
  ],
};
