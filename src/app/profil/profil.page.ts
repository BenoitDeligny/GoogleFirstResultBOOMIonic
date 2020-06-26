import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';
import { User } from '../shared/models/user';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  currentUser: User;

  constructor(private userService: UserServiceService) { }

  ngOnInit() {
    this.userService.getUser().subscribe(data => {
      this.currentUser = data;
      console.log(this.currentUser);
    });
  }

}
