import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongroComponent } from './bongro.component';

describe('BongroComponent', () => {
  let component: BongroComponent;
  let fixture: ComponentFixture<BongroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BongroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
