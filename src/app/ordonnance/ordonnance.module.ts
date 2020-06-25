import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

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
  declarations: [OrdonnancePage]
})
export class OrdonnancePageModule {}
