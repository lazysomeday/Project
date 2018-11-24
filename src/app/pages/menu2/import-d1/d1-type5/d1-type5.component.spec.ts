import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D1Type5Component } from './d1-type5.component';

describe('D1Type5Component', () => {
  let component: D1Type5Component;
  let fixture: ComponentFixture<D1Type5Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D1Type5Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D1Type5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
