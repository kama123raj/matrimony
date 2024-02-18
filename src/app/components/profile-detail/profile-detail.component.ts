import { Component, Input } from '@angular/core';
import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

@Component({
  selector: 'app-profile-detail',
  templateUrl: './profile-detail.component.html',
  styleUrls: ['./profile-detail.component.scss'],
})
export class ProfileDetailComponent {
  @Input('profileData') profileData: any;
  pageData: any;
  cardConfig: any;

  ngOnInit(): void {
    this.pageData = this.profileData;
    this.handler__swiper();
  }
  handler__swiper(): void {
    this.cardConfig = {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      navigation: {
        nextEl: '.swiper-button-next-cards',
        prevEl: '.swiper-button-prev-cards',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: false,
    };
  }
}
