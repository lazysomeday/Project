import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD1Component } from './order-d1.component';

describe('OrderD1Component', () => {
  let component: OrderD1Component;
  let fixture: ComponentFixture<OrderD1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
