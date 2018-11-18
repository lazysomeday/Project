import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD2Type1Component } from './order-d2-type1.component';

describe('OrderD2Type1Component', () => {
  let component: OrderD2Type1Component;
  let fixture: ComponentFixture<OrderD2Type1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD2Type1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD2Type1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
