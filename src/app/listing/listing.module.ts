import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { ListingComponent } from './listing.component';
import { ListingRoutingModule } from './listing-routing.module';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { HttpClientModule } from "@angular/common/http";
import { SearchBarComponent } from '../component/search-bar/search-bar.component';
import { ButtonComponent } from '../component/button/button.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListingRoutingModule,
    Ng2SearchPipeModule,
    HttpClientModule
  ],
  declarations: [
    ListingComponent,
    SearchBarComponent,
    ButtonComponent
  ]
})
export class ListingModule {}
