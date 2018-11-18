import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report1D3Component } from './report1-d3.component';

describe('Report1D3Component', () => {
  let component: Report1D3Component;
  let fixture: ComponentFixture<Report1D3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report1D3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report1D3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
