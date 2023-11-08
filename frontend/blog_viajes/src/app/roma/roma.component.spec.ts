import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RomaComponent } from './roma.component';

describe('RomaComponent', () => {
  let component: RomaComponent;
  let fixture: ComponentFixture<RomaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RomaComponent]
    });
    fixture = TestBed.createComponent(RomaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
