import { Component, OnInit } from '@angular/core';
import { OrdonnanceServiceService } from '../shared/services/ordonnance-service.service';
import { ActivatedRoute } from '@angular/router';
import { Prescription } from '../shared/models/prescription';
import { LocalNotifications, ELocalNotificationTriggerUnit } from '@ionic-native/local-notifications/ngx';

@Component({
  selector: 'app-ordonnance',
  templateUrl: './ordonnance.page.html',
  styleUrls: ['./ordonnance.page.scss'],
})
export class OrdonnancePage implements OnInit {

  constructor(private prescriptionService: OrdonnanceServiceService, private route: ActivatedRoute, private localNotifications: LocalNotifications) { }

  currentPrescription: Prescription;
  id: number;

  ngOnInit() {
    this.localNotifications.schedule({
      id: 1,
      defaults: 1,
      foreground: true,
      title: 'Pense à prendre ta prescription de la journée',
      trigger: { in: 15, unit: ELocalNotificationTriggerUnit.SECOND }
  });

    this.route.paramMap.subscribe(params => {
      this.id = parseInt(params.get('id'), 10);
    });

    this.prescriptionService.getPrescriptionById(this.id).subscribe(data => {
      for (const drug of data.drugs) {
        drug.moments.sort();
      }
      this.currentPrescription = data;
    });

  }
}
