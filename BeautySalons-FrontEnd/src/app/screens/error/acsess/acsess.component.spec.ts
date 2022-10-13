import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcsessComponent } from './acsess.component';

describe('AcsessComponent', () => {
  let component: AcsessComponent;
  let fixture: ComponentFixture<AcsessComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcsessComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AcsessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
