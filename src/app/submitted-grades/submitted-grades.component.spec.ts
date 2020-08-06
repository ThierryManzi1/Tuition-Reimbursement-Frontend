import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmittedGradesComponent } from './submitted-grades.component';

describe('SubmittedGradesComponent', () => {
  let component: SubmittedGradesComponent;
  let fixture: ComponentFixture<SubmittedGradesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmittedGradesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmittedGradesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
