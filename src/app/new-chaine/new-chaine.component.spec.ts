import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewChaineComponent } from './new-chaine.component';

describe('NewChaineComponent', () => {
  let component: NewChaineComponent;
  let fixture: ComponentFixture<NewChaineComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewChaineComponent]
    });
    fixture = TestBed.createComponent(NewChaineComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
