import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss'
})
export class ForgetPasswordComponent {

  email:string=''
  constructor(private auth:AuthService){

  }
  forget(){
     this.auth.forgetPasswoed(this.email)
  }
}
