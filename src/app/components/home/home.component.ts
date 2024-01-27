import { Component } from '@angular/core';
import { AuthService } from '../../shared/services/auth.service';
import { AddUserComponent } from '../../Cruds/add-user/add-user.component';
import { UserlistComponent } from '../../Cruds/userlist/userlist.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [AddUserComponent,UserlistComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  constructor(private auth:AuthService){

  }
  userLogout(){
    this.auth.logOut()
  }
}
