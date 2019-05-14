import { Component, OnInit } from '@angular/core';

import { MovieService } from '../movies/movie.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  genres: any;
  navbarOpen = false;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.genres = this.movieService.getGenres();
  }

  toggleNavbar() {
    this.navbarOpen = !this.navbarOpen;
  }

}
