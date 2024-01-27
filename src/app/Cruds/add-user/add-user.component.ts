import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedModule } from '../../shared/shared.module';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-add-user',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './add-user.component.html',
  styleUrl: './add-user.component.scss'
})
export class AddUserComponent {

  // Declare the form group
  userForm: FormGroup;

  constructor(private fb: FormBuilder,private dataService:DataService) { 
    this.userForm = this.fb.group({
      firstName: ['', ],
      lastName: ['', ],
      email: ['', ],
      phone: ['',]
    });
  }

  ngOnInit() {
   
    
  }


  get firstName() { return this.userForm.get('firstName'); }
  get lastName() { return this.userForm.get('lastName'); }
  get email() { return this.userForm.get('email'); }
  get phone() { return this.userForm.get('phone'); }

  // Submit function (you can replace this with your actual form submission logic)
  onSubmit() {
    if (this.userForm.valid) {
      console.log('Form submitted successfully:', this.userForm.value);
      // Add your logic to submit the form data here
      this.dataService.addUser(this.userForm.value)
    } else {
      console.log('Please fill out all required fields correctly.');
    }
  }
}
