import { TestBed, inject } from '@angular/core/testing';

import { Menu2Service } from './menu2.service';

describe('Menu2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Menu2Service]
    });
  });

  it('should be created', inject([Menu2Service], (service: Menu2Service) => {
    expect(service).toBeTruthy();
  }));
});
