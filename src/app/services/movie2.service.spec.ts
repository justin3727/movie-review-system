import { TestBed } from '@angular/core/testing';

import { Movie2Service } from './movie2.service';

describe('Movie2Service', () => {
  let service: Movie2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Movie2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
