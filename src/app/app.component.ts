import { Component } from '@angular/core';
import { MoviesComponent } from './movies/movies.component';
import { CommonModule } from '@angular/common';
import { LoggingComponent } from './logging/logging.component';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    MoviesComponent,
    LoggingComponent,
    RouterLink,
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'MovieApp';
}
