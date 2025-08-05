import { Component, inject, signal, computed } from '@angular/core';
import { MovieService } from '../movie-service';
import { MovieDetails } from "../movie-details/movie-details";

@Component({
  selector: 'app-movies-dashboard',
  template: `
    <div class="dashboard-header">Film details</div>
    <div class="filter-bar">
      <label for="movieFilter" class="filter-label">Search Movie</label>
      <input id="movieFilter" type="text" placeholder="Filter by movie" #filter (input)="onFilterChange(filter.value)" class="filter-input" />
    </div>
    @defer {
      <div class="movies-grid">
        @for (movie of filteredMovies(); track movie.id) {
          <app-movie-details [movie]="movie"></app-movie-details>
        }
      </div>
    } @placeholder {
      <div class="movies-grid">
        <p>Movies information</p>
      </div>
    } @loading(minimum 2s; after 500ms) {
      <div class="movies-grid">
        <div class="loading-title">loading movies details.</div>
      </div>
    } @error {
      <div class="movies-grid">
        <p>Failed to load movies</p>
      </div>
    }


  `,
  styleUrl: './movies-dashboard.css',
  imports: [MovieDetails]
})
export class MoviesDashboard {
  movieService = inject(MovieService);
  movies$ = this.movieService.getMovies();
  filter = signal('');
  allMovies = signal([] as any[]);

  constructor() {
    this.movies$.subscribe(movies => {
      this.allMovies.set(movies);
    });
  }

  onFilterChange(value: string) {
    this.filter.set(value);
  }

  filteredMovies = computed(() => {
    const token = this.filter().toLowerCase().trim();
    if (!token) return this.allMovies();
    return this.allMovies().filter(movie => movie.title.toLowerCase().includes(token));
  });
}
