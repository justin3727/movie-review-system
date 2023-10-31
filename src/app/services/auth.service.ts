import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  constructor(private router: Router) { }

  login(uname: string, pword: string) {
    if (uname === 'justin' && pword === '1234') {
      return 200;
    } else {
      return 403;
    }
  }

 

  private isAuthenticated: boolean = false; 




  logout() {
    // this.isAuthenticated = false; // Set isAuthenticated to false on logout
    this.router.navigate(['login']);
  }

  // Method to check if the user is authenticated
  // isUserAuthenticated(): boolean {
  //   return this.isAuthenticated;


  
}
