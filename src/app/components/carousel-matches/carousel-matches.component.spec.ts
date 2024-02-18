import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselMatchesComponent } from './carousel-matches.component';

describe('CarouselMatchesComponent', () => {
  let component: CarouselMatchesComponent;
  let fixture: ComponentFixture<CarouselMatchesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarouselMatchesComponent]
    });
    fixture = TestBed.createComponent(CarouselMatchesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
