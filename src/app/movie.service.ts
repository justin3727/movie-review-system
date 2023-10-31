// src/app/movie.service.ts
import { Injectable } from '@angular/core';
import { Movie } from './shared/model/moviereviewpage';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private movies: Movie[] = [];

  constructor() {
    // Populate the movie array with sample data or fetch data from an API.
  }

  getMovies() {
    return this.movies;
  }
}

