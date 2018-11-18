import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Department2Component } from './department2.component';

describe('Department2Component', () => {
  let component: Department2Component;
  let fixture: ComponentFixture<Department2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Department2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Department2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
