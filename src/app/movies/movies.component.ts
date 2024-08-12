import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  imports: [MovieComponent],
  standalone: true,
  selector: 'movies',
  templateUrl: 'movies.component.html',
})
export class MoviesComponent {}
