import { Component, OnInit } from '@angular/core';
import { OrdonnanceServiceService } from '../shared/services/ordonnance-service.service';
import { ActivatedRoute } from '@angular/router';
import { Prescription } from '../shared/models/prescription';


@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.page.html',
  styleUrls: ['./ordonnance.page.scss'],
})
export class OrdonnancePage implements OnInit {

  constructor(private prescriptionService: OrdonnanceServiceService, private route: ActivatedRoute) { }

  userPrescription: any;
  id: number;

  ngOnInit() {
    this.prescriptionService.getPrescriptions().subscribe(e => {
      this.userPrescription = e;
      console.log(this.userPrescription);
    });


    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

  }
}
