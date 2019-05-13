import { Component, OnInit } from '@angular/core';

import { movies} from './movie.model';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss'],
  providers: [MovieService],
})
export class MoviesComponent implements OnInit {
  //selectedModel: movies;

  constructor() { }

  ngOnInit() {
    
  }

}
