import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../../models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router) { }

  user = { mail: '', password: '' };

  ngOnInit() {
  }

  navigateHome() {
    this.router.navigate(['/home']);
    console.log(this.user);
  }

}
