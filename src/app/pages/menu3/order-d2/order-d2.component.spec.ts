import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD2Component } from './order-d2.component';

describe('OrderD2Component', () => {
  let component: OrderD2Component;
  let fixture: ComponentFixture<OrderD2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
