import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSwipeComponent } from './carousel-swipe.component';

describe('CarouselSwipeComponent', () => {
  let component: CarouselSwipeComponent;
  let fixture: ComponentFixture<CarouselSwipeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselSwipeComponent]
    });
    fixture = TestBed.createComponent(CarouselSwipeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
