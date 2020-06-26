import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { LocalNotifications } from '@ionic-native/local-notifications/ngx';
import { IonicModule } from '@ionic/angular';

import { OrdonnancePageRoutingModule } from './ordonnance-routing.module';

import { OrdonnancePage } from './ordonnance.page';
import {HomePageModule} from '../home/home.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdonnancePageRoutingModule,
    HomePageModule
  ],
  declarations: [OrdonnancePage],
  providers: [LocalNotifications]
})
export class OrdonnancePageModule {}
