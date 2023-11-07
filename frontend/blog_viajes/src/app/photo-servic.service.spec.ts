import { TestBed } from '@angular/core/testing';

import { PhotoServicService } from './photo-servic.service';

describe('PhotoServicService', () => {
  let service: PhotoServicService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhotoServicService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
