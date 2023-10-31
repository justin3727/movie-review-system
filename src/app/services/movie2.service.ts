import { Injectable } from '@angular/core';
import { Movie2 } from '../movie2.model';

@Injectable({
  providedIn: 'root'
})
export class Movie2Service {
  private movies: Movie2[] = [];

  createMovie(newMovie: Movie2): void {
    this.movies.push(newMovie);
  }

  getMovies(): Movie2[] {
    return this.movies;
  }
}