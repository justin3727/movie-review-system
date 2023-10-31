import { Component } from '@angular/core';
import { Movie2 } from '../movie2.model';
import { Movie2Service } from '../services/movie2.service';


@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  newMovie: Movie2 = new Movie2();

  constructor(private movieService: Movie2Service) {}

  addMovie() {
    this.movieService.createMovie(this.newMovie);
    console.log('New Movie:', this.newMovie);

    // Optionally, you can reset the form fields after adding the movie
    this.newMovie = new Movie2();

}
}
