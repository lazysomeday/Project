import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD2Type3Component } from './order-d2-type3.component';

describe('OrderD2Type3Component', () => {
  let component: OrderD2Type3Component;
  let fixture: ComponentFixture<OrderD2Type3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD2Type3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD2Type3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
