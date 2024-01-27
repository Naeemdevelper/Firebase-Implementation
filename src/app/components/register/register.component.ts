import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
})
export class RegisterComponent implements OnInit {
  email: string = '';
  password: string = '';
  
  constructor(private auth: AuthService) {}

  ngOnInit(): void {}

  submit() {
    this.auth.createUser(this.email, this.password);
  }

}
