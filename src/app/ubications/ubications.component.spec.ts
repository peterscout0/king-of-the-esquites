import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicationsComponent } from './ubications.component';

describe('UbicationsComponent', () => {
  let component: UbicationsComponent;
  let fixture: ComponentFixture<UbicationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UbicationsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UbicationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
