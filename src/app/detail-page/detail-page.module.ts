import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { DetailPageComponent } from './detail-page.component';
import { DetailPageRoutingModule } from './detail-page-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from "@angular/common/http";
import { ButtonComponent } from '../component/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DetailPageRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  declarations: [
    DetailPageComponent,
    ButtonComponent
  ]
})
export class DetailPageModule {}
