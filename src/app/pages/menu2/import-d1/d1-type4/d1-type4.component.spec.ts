import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Type4Component } from './d1-type4.component';

describe('D1Type4Component', () => {
  let component: D1Type4Component;
  let fixture: ComponentFixture<D1Type4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1Type4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1Type4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
