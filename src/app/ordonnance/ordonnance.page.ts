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

  currentPrescription: Prescription;
  id: number;

  ngOnInit() {

    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

    this.prescriptionService.getPrescriptionById(this.id).subscribe(data => {
      this.currentPrescription = data;
    });

  }
}
