import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movies } from '../movie.datasource';
import { CommonModule } from '@angular/common';

@Component({
  imports: [MovieComponent, CommonModule],
  standalone: true,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrl: 'movies.component.css',
})
export class MoviesComponent {
  title = 'Movie List';
  movieList: any;
}
