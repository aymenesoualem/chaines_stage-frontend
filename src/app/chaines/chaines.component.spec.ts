import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChainesComponent } from './chaines.component';

describe('ChainesComponent', () => {
  let component: ChainesComponent;
  let fixture: ComponentFixture<ChainesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChainesComponent]
    });
    fixture = TestBed.createComponent(ChainesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
