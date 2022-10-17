import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BongdaComponent } from './bongda.component';

describe('BongdaComponent', () => {
  let component: BongdaComponent;
  let fixture: ComponentFixture<BongdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BongdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BongdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
