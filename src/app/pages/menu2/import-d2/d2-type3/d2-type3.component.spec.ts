import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2Type3Component } from './d2-type3.component';

describe('D2Type3Component', () => {
  let component: D2Type3Component;
  let fixture: ComponentFixture<D2Type3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2Type3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2Type3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
