import { Component } from '@angular/core';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email: string = ''; 
  newPassword: string = ''; 
  confirmPassword: string = ''; 
  resetMessage: string = ''; 
  resetPassword() {
    if (this.email && this.newPassword && this.confirmPassword) {
      if (this.newPassword === this.confirmPassword) {
        
        this.resetMessage = `Password reset request has been sent to ${this.email}.`;
      } else {
        this.resetMessage = 'Passwords do not match. Please try again.';
      }
    } else {
      this.resetMessage = 'Please fill in all required fields.';
    }


  }

}
