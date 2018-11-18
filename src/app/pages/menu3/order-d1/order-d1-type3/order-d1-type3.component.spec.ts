import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD1Type3Component } from './order-d1-type3.component';

describe('OrderD1Type3Component', () => {
  let component: OrderD1Type3Component;
  let fixture: ComponentFixture<OrderD1Type3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD1Type3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD1Type3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
