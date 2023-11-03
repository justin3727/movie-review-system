import { Component, HostListener, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { InactivityService } from '../inactivity.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({

  selector: 'app-payment',

  templateUrl: './payment.component.html',

  styleUrls: ['./payment.component.css']

})

export class PaymentComponent implements OnInit, OnDestroy {

  @Input() routelink: string = '/payment';
  selectedPaymentMethod: string = '';
  text:number=5.5;
  timerValue: number = 10;
  timerInterval: any;
  inactivityTimerSubscription: Subscription | undefined;

  constructor(private router: Router, private inactivityService: InactivityService) {
    this.selectedPaymentMethod = '';
  }

  ngOnInit(): void {
    this.startTimer(); // Start the timer when the component is initialized.
    
    this.inactivityTimerSubscription = this.inactivityService
      .startTrackingInactivity()
      .subscribe(() => {
        this.router.navigate(['/login']);
      });
  }

  ngOnDestroy(): void {
    if (this.inactivityTimerSubscription) {
      this.inactivityTimerSubscription.unsubscribe();
    }
    
    this.resetTimer(); // Clear the timer when leaving the component.
  }

  @HostListener('document:mousemove', ['$event'])
  @HostListener('document:keydown', ['$event'])
  onActivity(event: Event) {
    this.resetTimer();
    this.startTimer();
  }

  resetTimer() {
    clearInterval(this.timerInterval);
    this.timerValue = 10;
  }

  startTimer() {
    this.timerInterval = setInterval(() => {
      if (this.timerValue > 0) {
        this.timerValue--;
        if (this.timerValue == 4) {
          alert('timing out');
        }
      } else {
        clearInterval(this.timerInterval);
        this.router.navigate(['/login']);
      }
    }, 1000);
  }

  handlePayment(paymentMethod: string): void {

    this.selectedPaymentMethod = paymentMethod;



    switch (paymentMethod) {

      case 'credit-card':

        this.processCreditCardPayment();

        break;

      case 'debit-card':

        this.processDebitCardPayment();

        break;

      case 'paypal':

        this.processPaypalPayment();

        break;

      case 'cash':

        this.processCashOnDelivery();

        break;

      default:

        console.log('Invalid payment method selected.');

        break;

    }

  }



  processCreditCardPayment(): void {



    this.router.navigate(['/creditcard']);

  }



  processDebitCardPayment(): void {



    this.router.navigate(['/debitcard']);

  }



  processPaypalPayment(): void {

    this.router.navigate(['/paypal']);

  }



  processCashOnDelivery(): void {

    this.router.navigate(['/cod']);

  }



}

