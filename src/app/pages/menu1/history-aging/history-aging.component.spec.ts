import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryAgingComponent } from './history-aging.component';

describe('HistoryAgingComponent', () => {
  let component: HistoryAgingComponent;
  let fixture: ComponentFixture<HistoryAgingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoryAgingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoryAgingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
