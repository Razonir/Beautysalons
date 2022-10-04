import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BusinessCardEditComponent } from './business-card-edit.component';

describe('BusinessCardEditComponent', () => {
  let component: BusinessCardEditComponent;
  let fixture: ComponentFixture<BusinessCardEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BusinessCardEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessCardEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
