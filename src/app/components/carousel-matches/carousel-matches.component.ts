import { ChangeDetectorRef, Component, Input } from '@angular/core';

import SwiperCore, { Pagination, Autoplay, EffectFade } from 'swiper';

SwiperCore.use([Pagination, Autoplay, EffectFade]);

import { Router } from '@angular/router';

@Component({
  selector: 'app-carousel-matches',
  templateUrl: './carousel-matches.component.html',
  styleUrls: ['./carousel-matches.component.scss'],
})
export class CarouselMatchesComponent {
  @Input('myMatches') myMatches!: any;

  cardConfig: any;
  profile!: any;
  yesText: string = 'Yes';
  noText: string = 'No';

  constructor(private detection: ChangeDetectorRef, private router: Router) {}

  ngOnInit(): void {
    this.profile = this.myMatches;
    this.handler__swiper();
  }

  handler_yes(item: any): void {
    this.router.navigate(['/profile', item.id]);
  }

  handler__swiper(): void {
    this.cardConfig = {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
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
      breakpoints: {
        320: {
          slidesPerView: 1.5,
          navigation: false,
        },
        640: {
          slidesPerView: 2.5,
          navigation: false,
        },
        768: {
          slidesPerView: 3,
        },
        1200: {
          slidesPerView: 4,
        },
      },
    };
  }
}
