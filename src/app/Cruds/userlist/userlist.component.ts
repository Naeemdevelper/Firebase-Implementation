import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';
import { map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-userlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './userlist.component.html',
  styleUrl: './userlist.component.scss'
})
export class UserlistComponent implements OnInit {
  users:any[]=[]
  constructor(private dataService:DataService){

  }
    ngOnInit(): void {
      this.loadUsers();
    }

    loadUsers(){
      this.dataService.userList().pipe(
        map(item => {
          return item.map(user => {
            return {
              id: user.payload.doc.id,
              ...user.payload.doc.data()!
            };
          });
        })
      ).subscribe((users) => {
        this.users = users;
        console.log('this.users',this.users)
      });
    }
}
