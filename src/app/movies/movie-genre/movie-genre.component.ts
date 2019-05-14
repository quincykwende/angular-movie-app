import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import {Location} from '@angular/common';

import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie-genre',
  templateUrl: './movie-genre.component.html',
  styleUrls: ['./movie-genre.component.scss']
})
export class MovieGenreComponent implements OnInit {

  movies = [];
  uri: string;
  genre: string;

  constructor(private movieService: MovieService,
    private route: ActivatedRoute,
    private _location: Location
    ) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.uri = params['genres'];
          this.genre = this.uri.toUpperCase();
          this.movies = this.movieService.getMoviesByGenre(this.uri);
        }
      );
  }

  backClicked() {
    this._location.back();
  }

}



