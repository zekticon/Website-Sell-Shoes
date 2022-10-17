import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PhukienpageComponent } from './phukienpage.component';

describe('PhukienpageComponent', () => {
  let component: PhukienpageComponent;
  let fixture: ComponentFixture<PhukienpageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PhukienpageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PhukienpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
