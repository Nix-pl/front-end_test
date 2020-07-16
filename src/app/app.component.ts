import { Component } from '@angular/core';
import {AuthService} from './shared/services/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public logIn: AuthService, private router: Router) {}
  title = 'app';
  userName = '';

  checkLoginStatus (status: string) {
    if (status === 'login') {
      this.logIn.logIn(this.userName);
    } else if (status === 'logout') {
      this.logIn.logOut();
      this.router.navigate(['/']);
    }
  }
}
