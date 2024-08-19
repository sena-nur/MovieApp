import { Component } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MoviesComponent, LoggingComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MovieApp';
}
