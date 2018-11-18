import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Department3Component } from './department3.component';

describe('Department3Component', () => {
  let component: Department3Component;
  let fixture: ComponentFixture<Department3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Department3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Department3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
