import { TestBed } from '@angular/core/testing';

import { PhotoService } from './photo-servic.service';

describe('PhotoServicService', () => {
  let service: PhotoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});