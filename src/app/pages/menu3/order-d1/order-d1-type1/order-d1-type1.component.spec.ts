import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD1Type1Component } from './order-d1-type1.component';

describe('OrderD1Type1Component', () => {
  let component: OrderD1Type1Component;
  let fixture: ComponentFixture<OrderD1Type1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD1Type1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD1Type1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
