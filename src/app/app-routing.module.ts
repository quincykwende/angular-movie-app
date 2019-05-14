import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { MovieListComponent } from './movies/movie-list/movie-list.component';
import { MovieDetailComponent } from './movies/movie-detail/movie-detail.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/movies', pathMatch: 'full'},
    { path: 'movies',  component: MovieListComponent },
    { path: 'movie/:uri',  component: MovieDetailComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule{

}