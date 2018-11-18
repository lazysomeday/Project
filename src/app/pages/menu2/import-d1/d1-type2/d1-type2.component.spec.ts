import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Type2Component } from './d1-type2.component';

describe('D1Type2Component', () => {
  let component: D1Type2Component;
  let fixture: ComponentFixture<D1Type2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1Type2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1Type2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
