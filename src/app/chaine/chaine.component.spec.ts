import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChaineComponent } from './chaine.component';

describe('ChaineComponent', () => {
  let component: ChaineComponent;
  let fixture: ComponentFixture<ChaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChaineComponent]
    });
    fixture = TestBed.createComponent(ChaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
