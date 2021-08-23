import { TestBed } from '@angular/core/testing';

import { FlowersApiService } from './flowers-api.service';

describe('FlowersApiService', () => {
  let service: FlowersApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FlowersApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
