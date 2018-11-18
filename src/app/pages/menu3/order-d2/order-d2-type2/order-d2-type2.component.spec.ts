import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderD2Type2Component } from './order-d2-type2.component';

describe('OrderD2Type2Component', () => {
  let component: OrderD2Type2Component;
  let fixture: ComponentFixture<OrderD2Type2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderD2Type2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderD2Type2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
