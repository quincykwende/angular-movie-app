import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate, query } from '@angular/animations';

import { movies } from '../movie.mock-data';
import { MoviesComponent } from '../movies.component';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss'],
  animations: [
    trigger('divState', [
      state('in', style({
        opacity: 1,
        transform: 'translateX(0)'
      })),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)'
        }),
        animate(500)
      ]),
      transition('* => void', [
        animate(500, style({
          transform: 'translateX(100px)',
          opacity: 0
        }))
      ])
    ]),
  ]
})
export class MovieListComponent implements OnInit {
  state = 'normal';
  movies = movies;

  constructor() { }

  onHover(){
    //this.state === 'normal' ? this.state = 'highlighted' : this.state = 'normal';
  }

  onClick(item) {

  }

  ngOnInit() {
  }

}
