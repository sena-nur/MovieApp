import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movie } from '../movie';

@Component({
  imports: [MovieComponent],
  standalone: true,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrl: 'movies.component.css',
})
export class MoviesComponent {
  tite = 'Movie List';

  movie: Movie = {
    id: 1,
    name: 'Movie Name',
  };

  getTitle() {
    return this.tite;
  }
}
