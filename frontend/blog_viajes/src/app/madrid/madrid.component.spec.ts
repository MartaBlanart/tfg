import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MadridComponent } from './madrid.component';

describe('MadridComponent', () => {
  let component: MadridComponent;
  let fixture: ComponentFixture<MadridComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MadridComponent]
    });
    fixture = TestBed.createComponent(MadridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
