import { TestBed } from '@angular/core/testing';

import { ShoeBRService } from './shoe-br.service';

describe('ShoeBRService', () => {
  let service: ShoeBRService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShoeBRService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
