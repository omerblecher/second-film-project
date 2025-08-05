import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Planet } from './planet';

@Injectable({
  providedIn: 'root'
})
export class PlanetsService {
  private baseUrl = 'https://swapi.info/api/planets/';
  private nameCache: { [id: string]: string } = {};

  constructor(private http: HttpClient) {}

  getPlanetDetails(id: string | number): Observable<Planet> {
    return this.http.get<Planet>(`${this.baseUrl}${id}`);
  }

  getPlanetName(id: string | number): Observable<string> {
    const idStr = String(id);
    if (this.nameCache[idStr]) {
      return new Observable<string>(observer => {
        observer.next(this.nameCache[idStr]);
        observer.complete();
      });
    }
    return this.http.get<{ name: string }>(`${this.baseUrl}${id}`).pipe(
      map(response => {
        this.nameCache[idStr] = response.name;
        return response.name;
      })
    );
  }
}
