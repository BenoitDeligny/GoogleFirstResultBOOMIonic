import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { UserServiceService } from '../../shared/services/user-service.service';
import { User } from '../../shared/models/user';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private router: Router, private userService: UserServiceService) { }

  user = new User();

  ngOnInit() {
  }

  navigateHome() {
    this.userService.login(this.user).subscribe((response) => {
      console.log(response);

    });
    this.router.navigate(['doctolib/home']);
    console.log(this.user);
  }

}
