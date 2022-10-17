import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Shoppingcart1Component } from './shoppingcart1.component';

describe('Shoppingcart1Component', () => {
  let component: Shoppingcart1Component;
  let fixture: ComponentFixture<Shoppingcart1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Shoppingcart1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Shoppingcart1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
