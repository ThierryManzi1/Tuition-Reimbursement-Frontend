import { TestBed } from '@angular/core/testing';

import { SubmitGradeService } from './submit-grade.service';

describe('SubmitGradeService', () => {
  let service: SubmitGradeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubmitGradeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
