import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Type1Component } from './d1-type1.component';

describe('D1Type1Component', () => {
  let component: D1Type1Component;
  let fixture: ComponentFixture<D1Type1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1Type1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1Type1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
