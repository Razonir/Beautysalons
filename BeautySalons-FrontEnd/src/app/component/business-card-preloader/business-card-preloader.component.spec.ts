import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardPreloaderComponent } from './business-card-preloader.component';

describe('BusinessCardPreloaderComponent', () => {
  let component: BusinessCardPreloaderComponent;
  let fixture: ComponentFixture<BusinessCardPreloaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCardPreloaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardPreloaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
