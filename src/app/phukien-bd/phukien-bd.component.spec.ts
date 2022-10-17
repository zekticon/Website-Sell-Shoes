import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhukienBDComponent } from './phukien-bd.component';

describe('PhukienBDComponent', () => {
  let component: PhukienBDComponent;
  let fixture: ComponentFixture<PhukienBDComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhukienBDComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhukienBDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
