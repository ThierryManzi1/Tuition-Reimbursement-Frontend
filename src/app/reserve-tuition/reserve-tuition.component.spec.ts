import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReserveTuitionComponent } from './reserve-tuition.component';

describe('ReserveTuitionComponent', () => {
  let component: ReserveTuitionComponent;
  let fixture: ComponentFixture<ReserveTuitionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReserveTuitionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReserveTuitionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
