import { Component, OnInit } from '@angular/core';
import { OrdonnanceServiceService } from '../shared/services/ordonnance-service.service';
import { Prescription } from '../shared/models/prescription';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.page.html',
  styleUrls: ['./ordonnance.page.scss'],
})
export class OrdonnancePage implements OnInit {

  prescriptions: Prescription[] = [];

  constructor(private prescriptionService: OrdonnanceServiceService) { }

  ngOnInit() {
    this.prescriptionService.getPrescriptions().subscribe(
      data => this.prescriptions = data
    );
    console.log(this.prescriptions);

  }

}
