import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
@Injectable({
  providedIn: 'root',
})
export class DataService {
  
  constructor(private db: AngularFirestore) {}
  
  addUser(user:any) {
    user.id=this.db.createId()
    return this.db.collection('/users').add(user)
  }

  userList() {
    return this.db.collection("/users").snapshotChanges();
  }

  deleteUser() {}
  updateUser() {}
}
