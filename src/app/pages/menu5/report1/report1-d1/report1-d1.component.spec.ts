import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1D1Component } from './report1-d1.component';

describe('Report1D1Component', () => {
  let component: Report1D1Component;
  let fixture: ComponentFixture<Report1D1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1D1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1D1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
