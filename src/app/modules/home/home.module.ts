import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SwiperModule } from 'swiper/angular';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { CarouselMatchesComponent } from 'src/app/components/carousel-matches/carousel-matches.component';
import { CarouselSwipeComponent } from 'src/app/components/carousel-swipe/carousel-swipe.component';
import { ToastComponent } from 'src/app/components/toast/toast.component';

@NgModule({
  declarations: [
    HomeComponent,
    CarouselMatchesComponent,
    CarouselSwipeComponent,
    ToastComponent,
    ToastComponent,
  ],
  imports: [CommonModule, HomeRoutingModule, SwiperModule],
})
export class HomeModule {}
