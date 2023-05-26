import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { keycloakauthGuard } from './keycloakauth.guard';

describe('keycloakauthGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => keycloakauthGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});
