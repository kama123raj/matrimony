import { Component, ElementRef, Input, ViewChild } from '@angular/core';
import * as Hammer from 'hammerjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-carousel-swipe',
  templateUrl: './carousel-swipe.component.html',
  styleUrls: ['./carousel-swipe.component.scss'],
})
export class CarouselSwipeComponent {
  @ViewChild('swipeElement') swipeElement!: ElementRef;
  @Input('myRecommended') myRecommended!: any;

  swiper: any;
  recommendedData!: any;
  timeoutId: any;
  starActive: boolean = false;
  shortListText: string = 'ShortListed';
  likeText: string = 'Like her?';

  shortlisted: any[] = [];
  interestedItems: any[] = [];
  rejectedItems: any[] = [];

  constructor(private tosteService: ToastService) {}

  ngOnInit(): void {
    this.recommendedData = [...this.myRecommended];
  }
  ngAfterViewInit(): void {
    this.addingHamer();
  }

  addingHamer(): void {
    const mc = new Hammer(this.swipeElement.nativeElement);
    mc.on('swipeleft', (event: any) => {
      this.handler__rejected();
    });

    mc.on('swiperight', (event: any) => {
      this.handler__interest();
    });
  }

  handler__rejected(): void {
    this.swipeElement.nativeElement.classList.add('left');
    this.handler_tost('Rejected');
    setTimeout(() => {
      this.removeLast();
      this.swipeElement.nativeElement.classList.remove('left');
      let lastItem = this.recommendedData.pop();
      if (lastItem) {
        this.rejectedItems.push(lastItem);
      }
    }, 450);
  }

  handler__interest(): void {
    this.swipeElement.nativeElement.classList.add('right');
    this.handler_tost('Interested');
    setTimeout(() => {
      this.removeLast();
      this.swipeElement.nativeElement.classList.remove('right');
      let lastItem = this.recommendedData.pop();
      if (lastItem) {
        this.interestedItems.push(lastItem);
        this.tosteService.interestedData.set(this.interestedItems.length);
      }
    }, 450);
  }

  handler_sortlist(item: any): void {
    item.starActive = !item.starActive;
      this.handler_tost('Shortlisted');
      this.shortlisted.push(item);
      this.tosteService.shortlistedData.set(this.shortlisted.length);
      this.swipeElement.nativeElement.classList.add('right');
      setTimeout(() => {
        this.removeLast();
        this.swipeElement.nativeElement.classList.remove('right');
      },450)
  }

  handler_tost(content: string): void {
    if (this.recommendedData.length > 0) {
      this.tosteService.toaster.set(true);
      this.tosteService.tosterText.set(content);

      if (this.timeoutId != null) {
        clearTimeout(this.timeoutId);
      }
      this.timeoutId = setTimeout(() => {
        this.tosteService.toaster.set(false);
        this.timeoutId = null;
      }, 1000);
    }
  }

  removeLast(): void {
    let parentElement = this.swipeElement.nativeElement;
    if (this.recommendedData.length > 0) {
      parentElement?.removeChild(parentElement?.lastChild);
    }
  }
}
