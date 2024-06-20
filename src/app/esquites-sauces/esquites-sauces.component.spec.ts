import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EsquitesSaucesComponent } from './esquites-sauces.component';

describe('EsquitesSaucesComponent', () => {
  let component: EsquitesSaucesComponent;
  let fixture: ComponentFixture<EsquitesSaucesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EsquitesSaucesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EsquitesSaucesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
