import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgChartsModule } from 'ng2-charts';

import { CapitalManagmentRoutingModule } from './capital-managment-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { PrimeNgModule } from '../prime-ng/prime-ng.module';
import { LineChartComponent } from './components/line-chart/line-chart.component';
import { InformationComponent } from './components/information/information.component';



@NgModule({
  declarations: [
    HomeComponent,
    LineChartComponent,
    InformationComponent,
  ],
  imports: [
    CommonModule,
    CapitalManagmentRoutingModule,
    NgChartsModule,
    PrimeNgModule
  ]
})
export class CapitalManagmentModule { }
