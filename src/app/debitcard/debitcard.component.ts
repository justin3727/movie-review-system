import { Component } from '@angular/core';

@Component({
  selector: 'app-debitcard',
  templateUrl: './debitcard.component.html',
  styleUrls: ['./debitcard.component.css']
})
export class DebitcardComponent {
  validateCVV(cvvInput: HTMLInputElement): boolean {
    const cvv = cvvInput.value;
    const cvvRegex = /^\d{3}$/;
    return cvvRegex.test(cvv);
  }

  processPayment() {
    const cardNumber = document.getElementById("card-number") as HTMLInputElement;
    const cardHolder = document.getElementById("card-holder") as HTMLInputElement;
    const expiry = document.getElementById("expiry") as HTMLInputElement;
    const cvv = document.getElementById("cvv") as HTMLInputElement;

    if (this.validateCVV(cvv)) {
      alert("Payment successful!");
    } else {
      alert("CVV is invalid. It should be numeric and three digits long.");
    }
  }
}