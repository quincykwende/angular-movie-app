import { EventEmitter, Injectable } from '@angular/core';

import { movies, Movie } from '../movies/movie.model';
 
@Injectable()
export class SearchService{
    moviesSearched = new EventEmitter<Movie[]>();

    private movies = movies;
    
    getMovies(){
        return this.movies.slice();
    }
    
    searchMoviesByNameGenre(query: string){
        return this.getMovies().filter(function(item) {
           if(item.genres.indexOf(query.toLowerCase()) !== -1 ){
               return true;
           }
           if(item.name.toLowerCase().includes(query.toLowerCase())){
            return true;
           }
        });
    }
}
