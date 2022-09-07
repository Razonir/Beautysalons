import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogcardPreloadComponent } from './blogcard-preload.component';

describe('BlogcardPreloadComponent', () => {
  let component: BlogcardPreloadComponent;
  let fixture: ComponentFixture<BlogcardPreloadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlogcardPreloadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlogcardPreloadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
