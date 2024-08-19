import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Movie } from '../movie';

@Component({
  selector: 'movie-detail',
  standalone: true,
  imports: [CommonModule, FormsModule], // Import CommonModule to use *ngIf
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css'],
})
export class MovieDetailComponent {
  @Input() movie: Movie | undefined;
}
