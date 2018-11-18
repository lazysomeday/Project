import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2Type1Component } from './d2-type1.component';

describe('D2Type1Component', () => {
  let component: D2Type1Component;
  let fixture: ComponentFixture<D2Type1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2Type1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2Type1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
