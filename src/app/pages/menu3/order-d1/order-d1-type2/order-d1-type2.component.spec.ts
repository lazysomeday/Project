import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD1Type2Component } from './order-d1-type2.component';

describe('OrderD1Type2Component', () => {
  let component: OrderD1Type2Component;
  let fixture: ComponentFixture<OrderD1Type2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD1Type2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD1Type2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
