import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Type3Component } from './d1-type3.component';

describe('D1Type3Component', () => {
  let component: D1Type3Component;
  let fixture: ComponentFixture<D1Type3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1Type3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1Type3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
