import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SubmitGradeComponent } from './submit-grade.component';

describe('SubmitGradeComponent', () => {
  let component: SubmitGradeComponent;
  let fixture: ComponentFixture<SubmitGradeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SubmitGradeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SubmitGradeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
