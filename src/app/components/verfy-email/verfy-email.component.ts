import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-verfy-email',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './verfy-email.component.html',
  styleUrl: './verfy-email.component.scss'
})
export class VerfyEmailComponent {
  email:string=''
  constructor(private auth:AuthService){
  }

  verify(){
     this.auth.varificationMail({email:this.email})
  }
}
