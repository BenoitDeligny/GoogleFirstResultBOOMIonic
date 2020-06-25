import { Component, OnInit } from '@angular/core';
import { OrdonnanceServiceService } from '../shared/services/ordonnance-service.service';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.page.html',
  styleUrls: ['./ordonnance.page.scss'],
})
export class OrdonnancePage implements OnInit {

  prescriptions: any[];

  constructor(private prescriptionService: OrdonnanceServiceService) { }

  ngOnInit() {
    this.prescriptionService.getPrescriptions().subscribe(
      data => this.prescriptions = data
    );
    console.log(this.prescriptions);
    
  }

}
