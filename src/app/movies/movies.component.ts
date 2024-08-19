import { Component } from '@angular/core';
import { MovieComponent } from '../movie/movie.component';
import { CommonModule } from '@angular/common';
import { Movie } from '../movie';
import { FormsModule } from '@angular/forms';
import { MovieDetailComponent } from '../movie-detail/movie-detail.component';
import { MovieService } from '../movie.service';

@Component({
  imports: [MovieComponent, CommonModule, FormsModule, MovieDetailComponent],
  standalone: true,
  selector: 'movies',
  templateUrl: 'movies.component.html',
  styleUrls: ['movies.component.css'],
})
export class MoviesComponent {
  title = 'Movie List';
  movieList: Movie[] = [];
  selectedMovie: Movie | undefined;

  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.getMovies();
  }

  onSelect(movie: Movie): void {
    this.selectedMovie = movie;
  }

  onClose(event: MouseEvent): void {
    event.stopPropagation();
    this.selectedMovie = undefined;
  }

  getMovies(): void {
    this.movieService.getMovies().subscribe((movieList) => {
      this.movieList = movieList;
    });
  }
}
