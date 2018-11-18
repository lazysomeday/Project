import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2D3Component } from './report2-d3.component';

describe('Report2D3Component', () => {
  let component: Report2D3Component;
  let fixture: ComponentFixture<Report2D3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2D3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2D3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
