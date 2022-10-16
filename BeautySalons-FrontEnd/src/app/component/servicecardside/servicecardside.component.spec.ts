import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServicecardsideComponent } from './servicecardside.component';

describe('ServicecardsideComponent', () => {
  let component: ServicecardsideComponent;
  let fixture: ComponentFixture<ServicecardsideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServicecardsideComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ServicecardsideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
