import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ImportD1Component } from './import-d1.component';

describe('ImportD1Component', () => {
  let component: ImportD1Component;
  let fixture: ComponentFixture<ImportD1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ImportD1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ImportD1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
