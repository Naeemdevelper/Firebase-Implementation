import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private auth: AngularFireAuth, private router: Router) {}

  sign(email: string, password: string) {
    this.auth
      .signInWithEmailAndPassword(email, password)
      .then((res: any) => {
        
    
        if(res['user']['multiFactor']['user']?.emailVerified == true){
          localStorage.setItem(
            'accessToken',
            res['user']['multiFactor']['user']['accessToken']
          );
          console.log('res.emailVerified',res['user']['multiFactor']['user']?.emailVerified)
          console.log('user',res)
          this.router.navigate(['/home']);
        }else{
          this.router.navigate(['/verify']);
        }
       
      })
      .catch((err) => {
        console.log(err);
      });
  }
  createUser(email: string, password: string) {
    this.auth
      .createUserWithEmailAndPassword(email, password)
      .then((reponse:any) => {
       this.varificationMail(reponse?.user)

        this.router.navigate(['/login']);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  forgetPasswoed(email: any) {
    this.auth
      .sendPasswordResetEmail(email)
      .then(() => {})
      .catch((err) => {
        console.log('forget error', err);
      });
  }

  varificationMail(user: any) {
    user.sendEmailVerification().then(() => {})
      .catch((err: any) => {
        console.log('verfiy error', err);
      });
  }

  logOut() {
    return this.auth.signOut().then(() => {
      localStorage.removeItem('accessToken');
      this.router.navigate(['/login']);
    });
  }
}
