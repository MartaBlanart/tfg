import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParisComponent } from './paris.component';

describe('ParisComponent', () => {
  let component: ParisComponent;
  let fixture: ComponentFixture<ParisComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ParisComponent]
    });
    fixture = TestBed.createComponent(ParisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
