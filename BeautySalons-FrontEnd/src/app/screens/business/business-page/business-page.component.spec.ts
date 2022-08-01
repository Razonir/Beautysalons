import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessPageComponent } from './business-page.component';

describe('BusinessPageComponent', () => {
  let component: BusinessPageComponent;
  let fixture: ComponentFixture<BusinessPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
