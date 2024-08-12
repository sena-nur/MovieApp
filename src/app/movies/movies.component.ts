import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';

@Component({
  imports: [MovieComponent],
  standalone: true,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrl: 'movies.component.css',
})
export class MoviesComponent {}
