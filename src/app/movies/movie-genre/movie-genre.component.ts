import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

import { MovieService } from '../movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit, OnDestroy {
  movies = [];
  uri: string;
  genre: string;
  genreParamsSubscription: Subscription;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private _location: Location
    ) {
  }

  ngOnInit() {
    this.genreParamsSubscription = this.route.params
      .subscribe(
        (params: Params) => {
          this.uri = params['genres'];
          if(this.uri != ''){
            this.genre = this.uri.toUpperCase();
          }
          this.movies = this.movieService.getMoviesByGenre(this.uri);
        }
      );
  }

  backClicked() {
    this._location.back();
  }

  //todo: remove angular 7 handles this by default;
  ngOnDestroy() {
    this.genreParamsSubscription.unsubscribe();
  }

}



