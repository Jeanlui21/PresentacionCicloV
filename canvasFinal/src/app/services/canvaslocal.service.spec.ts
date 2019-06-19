import { TestBed } from '@angular/core/testing';

import { CanvasLocal } from './canvaslocal.service';

describe('CanvasServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CanvasLocal = TestBed.get(CanvasLocal);
    expect(service).toBeTruthy();
  });
});
