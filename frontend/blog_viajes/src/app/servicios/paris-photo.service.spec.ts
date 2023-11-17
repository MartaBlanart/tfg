import { TestBed } from '@angular/core/testing';

import { ParisPhotoService } from './paris-photo.service';

describe('ParisPhotoService', () => {
  let service: ParisPhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ParisPhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
