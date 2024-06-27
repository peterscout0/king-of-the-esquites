import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwiperSectionComponent } from './swiper-section.component';

describe('SwiperSectionComponent', () => {
  let component: SwiperSectionComponent;
  let fixture: ComponentFixture<SwiperSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SwiperSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SwiperSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
