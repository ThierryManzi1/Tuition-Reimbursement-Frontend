import { TestBed } from '@angular/core/testing';

import { ReserveTuitionService } from './reserve-tuition.service';

describe('ReserveTuitionService', () => {
  let service: ReserveTuitionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReserveTuitionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
