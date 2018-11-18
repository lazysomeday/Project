import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1D2Component } from './report1-d2.component';

describe('Report1D2Component', () => {
  let component: Report1D2Component;
  let fixture: ComponentFixture<Report1D2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1D2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1D2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
