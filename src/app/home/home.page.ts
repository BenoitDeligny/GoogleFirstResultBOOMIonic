import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { OrdonnanceServiceService } from '../shared/services/ordonnance-service.service';
import { UserServiceService } from '../shared/services/user-service.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  userPrescription = [];
  searchedValue: string;
  statut: string;

  constructor(private prescriptionService: OrdonnanceServiceService, private userService: UserServiceService) { }

  ngOnInit() {
    this.prescriptionService.getPrescriptions().subscribe(e => {
      this.userPrescription = e;
      this.userPrescription.reverse();
      console.log(this.userPrescription);
      });

  }

  // displayPrescription() {
  //   if (this.userPrescription.dateCreation) {
  //     return this.userPrescription;
  //   }
  // }

}
