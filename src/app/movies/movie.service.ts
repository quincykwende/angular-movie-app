import { movies } from './movie.model';
 
export class MovieService{

    private movies = movies;
    
    getMovies(){
        return this.movies.slice();
    }
}