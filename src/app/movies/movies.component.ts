import { Component, OnInit, OnDestroy } from '@angular/core';

import { movies, Movie } from './movie.model';
import { MovieService } from './movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit, OnDestroy {
  selectedMovie: Movie;
  paramsSubscription: Subscription;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.paramsSubscription = this.movieService.movieSelected
      .subscribe(
        (movie: Movie) => {
          this.selectedMovie = movie;
        }
      );
  }

  //todo: remove angular 7 handles this by default;
  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }

}
