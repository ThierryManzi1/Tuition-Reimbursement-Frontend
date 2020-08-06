import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReservedTuitionsComponent } from './reserved-tuitions.component';

describe('ReservedTuitionsComponent', () => {
  let component: ReservedTuitionsComponent;
  let fixture: ComponentFixture<ReservedTuitionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReservedTuitionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReservedTuitionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
