import { EventEmitter, Injectable } from '@angular/core';

import { movies, Movie } from './movie.model';
import { genreType, GenreType } from './movie-genre/movie-genre.model';
 
@Injectable()
export class MovieService{
    movieSelected = new EventEmitter<Movie>();

    private movies = movies;
    
    getMovies(){
        return this.movies.slice();
    }

    getMovie(uri: string){
        var obj = this.getMovies().find(x => x.key == uri);
        return obj;
    }  
    
    getMoviesByGenre(uri: string){
        return this.getMovies().filter(function(item) {
           if(item.genres.indexOf(uri) !== -1){
               return true;
           }
        });
    }

    getGenres(){
        return genreType; 
    }
}
