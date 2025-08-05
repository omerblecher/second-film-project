import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Movie } from './movie';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = 'https://swapi.info/api/films';

  constructor(private http: HttpClient) {}

  getMovies(): Observable<Movie[]> {
    return this.http.get<any[]>(this.baseUrl).pipe(
      map((movies: any[]) =>
        movies.map(movie => ({
          title: movie.title,
          episode_id: movie.episode_id,
          opening_crawl: movie.opening_crawl,
          director: movie.director,
          producer: movie.producer,
          release_date: movie.release_date,
          characterUrls: movie.characters,
          characterIds: movie.characters.map((url: string) => {
            const match = url.match(/\/people\/(\d+)/);
            return match ? Number(match[1]) : null;
          }).filter((id: number | null) => id !== null),
          planetUrls: movie.planets,
          planetIds: movie.planets.map((url: string) => {
            const match = url.match(/\/planets\/(\d+)/);
            return match ? Number(match[1]) : null;
          }).filter((id: number | null) => id !== null),
          starshipUrls: movie.starships,
          starshipIds: movie.starships.map((url: string) => {
            const match = url.match(/\/starships\/(\d+)/);
            return match ? Number(match[1]) : null;
          }).filter((id: number | null) => id !== null),
          vehicleUrls: movie.vehicles,
          vehicleIds: movie.vehicles.map((url: string) => {
            const match = url.match(/\/vehicles\/(\d+)/);
            return match ? Number(match[1]) : null;
          }).filter((id: number | null) => id !== null),
          speciesUrls: movie.species,
          speciesIds: movie.species.map((url: string) => {
            const match = url.match(/\/species\/(\d+)/);
            return match ? Number(match[1]) : null;
          }).filter((id: number | null) => id !== null)
        }))
      )
    );
  }
}
