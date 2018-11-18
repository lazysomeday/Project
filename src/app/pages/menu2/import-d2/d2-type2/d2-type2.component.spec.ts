import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D2Type2Component } from './d2-type2.component';

describe('D2Type2Component', () => {
  let component: D2Type2Component;
  let fixture: ComponentFixture<D2Type2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D2Type2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D2Type2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
