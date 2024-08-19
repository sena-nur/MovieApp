import { Routes } from '@angular/router';
import { MoviesComponent } from './movies/movies.component';
import { MovieDetailComponent } from './movie-detail/movie-detail.component';

export const routes: Routes = [
  {
    path: 'movies',
    component: MoviesComponent,
    title: 'Movie page',
  },
  /*   {
        path: 'details/:id',
        component: MovieDetailComponent,
        title: 'Movie details',
      }, */
];
