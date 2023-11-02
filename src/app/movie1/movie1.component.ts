import { Component, HostListener, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movie1',
  templateUrl: './movie1.component.html',
  styleUrls: ['./movie1.component.css']
})
export class Movie1Component implements OnInit {
  constructor(private movieService: MovieService, private router: Router) { }

  moviesPerPage = 6;
  currentPage = 1;
  movie: any[] = [
    { title: 'JAWAN', image: 'assets/images/jawan.jpg', videoLink: "https://www.youtube.com/embed/MWOlnZSnXJo?si=4PLfaCcOcQu-jVIZ" },
    { title: 'LEO', image: 'assets/images/leo.webp', videoLink: 'https://www.youtube.com/embed/3P-t4WRoW5c?si=LFEicSJOoB9jh9P3' },
    { title: 'BLOODY DADDY', image: 'assets/images/bloodydaddy.webp', videoLink: 'https://www.youtube.com/embed/OGetAaNlTv0?si=I9KxDp4BEDwQv-Ay' },
    { title: 'ADIPURUSH', image: 'assets/images/adi.webp', videoLink: 'https://www.youtube.com/embed/scNmYjoR-qM?si=RGk1dI47T6dkEMaB' },
    { title: 'THE WOLF OF WALL STREET', image: 'assets/images/WOWS.jpg', videoLink: 'https://www.youtube.com/embed/GNGCav9fRhc?si=fqzwmz2_8KdF16lr' },
    { title: 'JOHN-WICK', image: 'assets/images/johnwick.jpg', videoLink: 'https://www.youtube.com/embed/qEVUtrk8_B4?si=btCwBS50U0nhmviv' },
    { title: 'MORBIUS', image: 'assets/images/morbius.jpg', videoLink: 'https://www.youtube.com/embed/oZ6iiRrz1SY?si=5aQCJN3WWW467zeA' },
    { title: 'VIKRAM', image: 'assets/images/Vikr.jpg', videoLink: 'https://www.youtube.com/embed/OKBMCL-frPU?si=bQWfWS8AONde9G3H' },
    { title: 'JOKER', image: 'assets/images/joker.jpg', videoLink: 'https://www.youtube.com/embed/t433PEQGErc?si=uLcCpAsJ0HcAhOdd' },
    { title: 'EXPENDABLES', image: 'assets/images/EXPEND.webp', videoLink: 'https://www.youtube.com/embed/DhlaBO-SwVE?si=2PEJdT_pXyLHR_0i' },
    { title: 'JAWAN', image: 'assets/images/jawan.jpg', videoLink: "https://www.youtube.com/embed/MWOlnZSnXJo?si=4PLfaCcOcQu-jVIZ" },
    { title: 'LEO', image: 'assets/images/leo.webp', videoLink: 'https://www.youtube.com/embed/3P-t4WRoW5c?si=LFEicSJOoB9jh9P3' },
    { title: 'BLOODY DADDY', image: 'assets/images/bloodydaddy.webp', videoLink: 'https://www.youtube.com/embed/OGetAaNlTv0?si=I9KxDp4BEDwQv-Ay' },
    { title: 'ADIPURUSH', image: 'assets/images/adi.webp', videoLink: 'https://www.youtube.com/embed/scNmYjoR-qM?si=RGk1dI47T6dkEMaB' },
    { title: 'THE WOLF OF WALL STREET', image: 'assets/images/WOWS.jpg', videoLink: 'https://www.youtube.com/embed/GNGCav9fRhc?si=fqzwmz2_8KdF16lr' },
    { title: 'JOHN-WICK', image: 'assets/images/johnwick.jpg', videoLink: 'https://www.youtube.com/embed/qEVUtrk8_B4?si=btCwBS50U0nhmviv' },
    { title: 'MORBIUS', image: 'assets/images/morbius.jpg', videoLink: 'https://www.youtube.com/embed/oZ6iiRrz1SY?si=5aQCJN3WWW467zeA' },
    { title: 'VIKRAM', image: 'assets/images/Vikr.jpg', videoLink: 'https://www.youtube.com/embed/OKBMCL-frPU?si=bQWfWS8AONde9G3H' },
    { title: 'JOKER', image: 'assets/images/joker.jpg', videoLink: 'https://www.youtube.com/embed/t433PEQGErc?si=uLcCpAsJ0HcAhOdd' },
    { title: 'EXPENDABLES', image: 'assets/images/EXPEND.webp', videoLink: 'https://www.youtube.com/embed/DhlaBO-SwVE?si=2PEJdT_pXyLHR_0i' },
    { title: 'ADIPURUSH', image: 'assets/images/adi.webp', videoLink: 'https://www.youtube.com/embed/scNmYjoR-qM?si=RGk1dI47T6dkEMaB' },
    { title: 'THE WOLF OF WALL STREET', image: 'assets/images/WOWS.jpg', videoLink: 'https://www.youtube.com/embed/GNGCav9fRhc?si=fqzwmz2_8KdF16lr' },
    { title: 'JOHN-WICK', image: 'assets/images/johnwick.jpg', videoLink: 'https://www.youtube.com/embed/qEVUtrk8_B4?si=btCwBS50U0nhmviv' },
    { title: 'MORBIUS', image: 'assets/images/morbius.jpg', videoLink: 'https://www.youtube.com/embed/oZ6iiRrz1SY?si=5aQCJN3WWW467zeA' },
   
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
