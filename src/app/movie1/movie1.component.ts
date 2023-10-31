import { Component, HostListener, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.css']
})
export class Movie1Component implements OnInit {
  constructor(private movieService: MovieService, private router: Router) {}

  moviesPerPage = 6;  
  currentPage = 1;
  movie: any[] = [
   
    { title: 'JAWAN', image: 'assets/images/jawan.jpg' },{ title: 'LEO', image: 'assets/images/leo.webp'}, 
  { title: 'BLOODY DADDY', image: 'assets/images/bloodydaddy.webp' }, { title: 'ADIPURUSH', image: 'assets/images/adi.webp' }
    , { title: 'THE WOLF OF WALL STREET', image: 'assets/images/WOWS.jpg' }, { title: 'JOHN-WICK', image: 'assets/images/johnwick.jpg' },
  { title: 'MORBIUS', image: 'assets/images/morbius.jpg' }, { title: 'VIKRAM', image: 'assets/images/Vikr.jpg' }, { title: 'JOKER', image: 'assets/images/joker.jpg' }
    , { title: 'EXPENDABLES', image: 'assets/images/EXPEND.webp' }, { title: 'MORBIUS', image: 'assets/images/morbius.jpg' }, { title: 'SALAAR', image: 'assets/images/salaar.jpg' }
    , { title: 'THE WOLF OF WALL STREET', image: 'assets/images/WOWS.jpg' }, { title: 'JOHN-WICK', image: 'assets/images/johnwick.jpg' },
  { title: 'MORBIUS', image: 'assets/images/morbius.jpg' }, { title: 'VIKRAM', image: 'assets/images/Vikr.jpg' }, { title: 'JOKER', image: 'assets/images/joker.jpg' }
    , { title: 'EXPENDABLES', image: 'assets/images/EXPEND.webp' }, { title: 'MORBIUS', image: 'assets/images/morbius.jpg' }, { title: 'SALAAR', image: 'assets/images/salaar.jpg' },{ title: 'JOKER', image: 'assets/images/joker.jpg' }
    , { title: 'EXPENDABLES', image: 'assets/images/EXPEND.webp' }, { title: 'MORBIUS', image: 'assets/images/morbius.jpg' }, { title: 'SALAAR', image: 'assets/images/salaar.jpg'}

  ];

  getDisplayedMovies() {
    const startIndex = (this.currentPage - 1) * this.moviesPerPage;
    const endIndex = startIndex + this.moviesPerPage;
    return this.movie.slice(startIndex, endIndex);
  }

  changePage(pageNumber: number) {
    this.currentPage = pageNumber;
  }

  
  loadedMovies = 0;
  loading = false;

  ngOnInit(): void {
    this.loadMoreMovies();
  }

  @HostListener('window:scroll', [])
  onScroll(): void {
    if (this.shouldLoadMoreMovies() && !this.loading) {
      this.loading = true;
      this.loadMoreMovies();
    }
  }

  shouldLoadMoreMovies(): boolean {
    return (
      window.innerHeight + window.scrollY >= document.body.offsetHeight &&
      this.loadedMovies < this.movie.length
    );
  }

  loadMoreMovies(): void {
    
    setTimeout(() => {
      const end = this.loadedMovies + this.moviesPerPage;
      const batch = this.movieService.getMovies().slice(
        this.loadedMovies,
        end
      );
      this.movie = this.movie.concat(batch);
      this.loadedMovies = end;
      this.loading = false;
    }, 1000); 
  }
}
