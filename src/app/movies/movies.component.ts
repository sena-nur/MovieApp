import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { Movies } from '../movie.datasource';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [MovieComponent, CommonModule, FormsModule],
  standalone: true,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrl: 'movies.component.css',
})
export class MoviesComponent {
  title = 'Movie List';
  movieList = Movies;
  selectedMovie: Movie | undefined;

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  onClose(event: MouseEvent): void {
    event.stopPropagation(); // Prevent event from propagating to the li element
    this.selectedMovie = undefined; // Clear the selected movie
  }
}
