import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  searchQuery: string = ''; 

  constructor(private router: Router, private auth: AuthService) { }

  ngOnInit(): void {
  }

  goToHome() {
    this.router.navigate(['home']);
  }

  logout() {
    this.auth.logout();
  }

  makePayment(){
    this.router.navigate(['payment']);
  }
  search() {
    
    if (this.searchQuery) {
      this.router.navigate(['search-results', this.searchQuery]);
    }
  }

  home(){
    this.router.navigate(['/movie1']);
  }

}
