import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import {Location} from '@angular/common';

import { Movie } from '../movie.model';
import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit, OnDestroy {
  movie: Movie;
  uri: string;
  movieParamsSubscription: Subscription;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private _location: Location,
    private _router: Router
    ) {
  }

  ngOnInit() {
    this.movieParamsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.uri = params['uri'];
          this.movie = this.movieService.getMovie(this.uri);
        }
      );
  }

  backClicked() {
    this._location.back();
  }

  //todo: remove angular 7 handles this by default;
  ngOnDestroy() {
    this.movieParamsSubscription.unsubscribe();
  }

}
