import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

class User{
  mobile!: string;
  name!: string;
  email!: string;
  password!: string;
  dob!: string;
}


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {


  user: User = {
    mobile: '',
    name: '',
    email: '',
    password: '',
    dob: ''
  };

  welcomeMessage: string = ''; 

  onSubmit() {
    
    this.welcomeMessage = `Welcome, ${this.user.name}!`;
  }
}

