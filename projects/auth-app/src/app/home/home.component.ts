import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { userTokenInfo } from '../common/types/object-types';
import { AuthService } from './../common/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  userInfo: userTokenInfo | null = null;

  ngOnInit(): void {
    if (this.authService.isLoggedIn()) this.userInfo = this.authService.currentUser;
    else this.userInfo == null;
  }

  logout() {
    localStorage.removeItem('token');
    this.userInfo = null;
  }

  getUserInfo() {
    return JSON.stringify(this.userInfo, null, 4);
  }
}
