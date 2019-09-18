import { TestBed } from '@angular/core/testing';

import { SpellServiceService } from './spell-service.service';

describe('SpellServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SpellServiceService = TestBed.get(SpellServiceService);
    expect(service).toBeTruthy();
  });
});
