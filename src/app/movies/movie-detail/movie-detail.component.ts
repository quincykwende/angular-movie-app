import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

import { movies, Movie } from '../movie.model';
import { MovieService } from '../movie.service';


@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.scss'],
})
export class MovieDetailComponent implements OnInit {
  movie: Movie;
  uri: string;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private _location: Location
    ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uri = params['uri'];
          this.movie = this.movieService.getMovie(this.uri);
          console.log(this.uri);
        }
      );
  }

  backClicked() {
    this._location.back();
  }

}
