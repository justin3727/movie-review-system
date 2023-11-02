import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ReviewServiceService } from '../services/review-service.service';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  movieTitle: string | null = null;
  movieImage: string | null = null;
  reviews: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private reviewService: ReviewServiceService,
    private router:Router,
    private authService: AuthService
  ) {
    this.route.paramMap.subscribe(params => {
      this.movieTitle = params.get('title');
      this.movieImage = params.get('image');
    });
  }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe((data: any) => {
      console.log(data.reviews);
      this.reviews = data.reviews; 
    });

  }

  stars: number[] = [1, 2, 3, 4, 5];
  selectedStars: number = 0;
  userComment: string = '';
  reviewHeading: string = '';

  rateMovie(star: number) {
    this.selectedStars = star;
  }

  submitReview() {
    this.reviews.unshift({ heading: this.reviewHeading, rating: this.selectedStars, description: this.userComment, })
    console.log(this.selectedStars);

    }

  getStarClass(index: number): string {
    return index <= this.selectedStars ? 'selected' : '';
  }

 



}
