import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Movie1Component } from './movie1.component';

describe('Movie1Component', () => {
  let component: Movie1Component;
  let fixture: ComponentFixture<Movie1Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Movie1Component]
    });
    fixture = TestBed.createComponent(Movie1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
