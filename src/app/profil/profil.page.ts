import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../shared/services/user-service.service';
import { User } from '../shared/models/user';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-profil',
  templateUrl: './profil.page.html',
  styleUrls: ['./profil.page.scss'],
})
export class ProfilPage implements OnInit {

  id = 1;
  currentUser: User;

  constructor(private userService: UserServiceService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.paramMap.subscribe(params => {
    //   this.id = parseInt(params.get('id'), 10);
    // });



    this.userService.getUserById(
      this.id).subscribe(data => {
        this.currentUser = data;
        console.log(this.currentUser);
      });
  }

}
