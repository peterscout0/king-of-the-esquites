import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquitesAccordionComponent } from './esquites-accordion.component';

describe('EsquitesAccordionComponent', () => {
  let component: EsquitesAccordionComponent;
  let fixture: ComponentFixture<EsquitesAccordionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsquitesAccordionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsquitesAccordionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
