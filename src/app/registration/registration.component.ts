import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegistrationService } from '../registration.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {
  registrationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private registrationService: RegistrationService
  ) {
    this.registrationForm = this.fb.group({
      username: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
    });
  }

  registerUser() {
    console.log("register user enter. ");
    console.log("register data", this.registrationForm.value);

    if (this.registrationForm.valid) {
      this.registrationService
        .registerUser(
          this.registrationForm.value.username,
          this.registrationForm.value.password,
          this.registrationForm.value.email
        )
        .subscribe(
          (response) => {
            console.log('Registration successful:', response);
          },
          (error) => {
            console.error('Registration error:', error);
          }
        );
    } else {
      console.log('Form is invalid. Please check the fields.');
    }

    console.log("register user exit. ");
  }
}