import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2D2Component } from './report2-d2.component';

describe('Report2D2Component', () => {
  let component: Report2D2Component;
  let fixture: ComponentFixture<Report2D2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2D2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2D2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
