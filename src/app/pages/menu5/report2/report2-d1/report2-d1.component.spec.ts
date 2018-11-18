import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Report2D1Component } from './report2-d1.component';

describe('Report2D1Component', () => {
  let component: Report2D1Component;
  let fixture: ComponentFixture<Report2D1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Report2D1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Report2D1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
