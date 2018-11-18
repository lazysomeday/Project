import { TestBed, inject } from '@angular/core/testing';

import { Menu1Service } from './menu1.service';

describe('Menu1Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Menu1Service]
    });
  });

  it('should be created', inject([Menu1Service], (service: Menu1Service) => {
    expect(service).toBeTruthy();
  }));
});
