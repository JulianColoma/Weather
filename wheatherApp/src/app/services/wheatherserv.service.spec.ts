import { TestBed } from '@angular/core/testing';

import { WheatherservService } from './wheatherserv.service';

describe('WheatherservService', () => {
  let service: WheatherservService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WheatherservService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
