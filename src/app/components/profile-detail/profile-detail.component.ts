import { ChangeDetectorRef, Component, Input, ViewChild } from '@angular/core';
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
  activeSlide: number = 1;
  totalSlides!: number;
  slidesConut: any;

  constructor(private change: ChangeDetectorRef) {}
  ngOnInit(): void {
    this.pageData = this.profileData;
    this.handler__swiper();
  }
  handler__swiper(): void {
    this.cardConfig = {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: false,
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: false,
    };
  }

  onSwiper(swiper: any): void {
    this.slidesConut = swiper;
    this.totalSlides = this.slidesConut.slides.length;
    this.slidesConut.on('slideChange', () => {
      this.activeSlide = this.slidesConut.activeIndex + 1;
      this.change.detectChanges();
    });
  }
}
