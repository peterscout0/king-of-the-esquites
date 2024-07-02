import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeparatorSectionComponent } from './separator-section.component';

describe('SeparatorSectionComponent', () => {
  let component: SeparatorSectionComponent;
  let fixture: ComponentFixture<SeparatorSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SeparatorSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeparatorSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
