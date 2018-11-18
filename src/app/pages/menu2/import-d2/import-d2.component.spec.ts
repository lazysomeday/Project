import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportD2Component } from './import-d2.component';

describe('ImportD2Component', () => {
  let component: ImportD2Component;
  let fixture: ComponentFixture<ImportD2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportD2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportD2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
