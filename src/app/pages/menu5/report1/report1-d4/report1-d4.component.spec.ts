import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1D4Component } from './report1-d4.component';

describe('Report1D4Component', () => {
  let component: Report1D4Component;
  let fixture: ComponentFixture<Report1D4Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1D4Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1D4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
