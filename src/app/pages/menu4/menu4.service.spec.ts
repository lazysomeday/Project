import { TestBed, inject } from '@angular/core/testing';

import { Menu4Service } from './menu4.service';

describe('Menu4Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Menu4Service]
    });
  });

  it('should be created', inject([Menu4Service], (service: Menu4Service) => {
    expect(service).toBeTruthy();
  }));
});
