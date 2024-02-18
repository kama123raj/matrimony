import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileDetailsRoutingModule } from './profile-details-routing.module';
import { ProfileDetailsComponent } from './profile-details.component';
import { ProfileDetailComponent } from 'src/app/components/profile-detail/profile-detail.component';
import { SwiperModule } from 'swiper/angular';

@NgModule({
  declarations: [
    ProfileDetailsComponent,
    ProfileDetailComponent
  ],
  imports: [
    CommonModule,
    ProfileDetailsRoutingModule,
    SwiperModule
  ]
})
export class ProfileDetailsModule { }
