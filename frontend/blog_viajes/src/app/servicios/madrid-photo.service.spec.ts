import { TestBed } from '@angular/core/testing';

import { MadridPhotoService } from './madrid-photo.service';

describe('MadridPhotoService', () => {
  let service: MadridPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MadridPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
