import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD2Type4Component } from './order-d2-type4.component';

describe('OrderD2Type4Component', () => {
  let component: OrderD2Type4Component;
  let fixture: ComponentFixture<OrderD2Type4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD2Type4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD2Type4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
