import { Component, OnInit } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { AuthService } from '../../shared/services/auth.service';
import { routeGuard } from '../../shared/authgards/route.guard';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss'
})
export class LoginFormComponent implements OnInit {
  email: string =''
  password: string =''
  constructor(private auth: AuthService) { }
  ngOnInit(): void {

  }

  submit() {
    this.auth.sign(this.email, this.password)
  }
}
