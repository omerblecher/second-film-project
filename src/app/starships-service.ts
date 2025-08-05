import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Starship } from './starship';

@Injectable({
  providedIn: 'root'
})
export class StarshipsServiceService {
  private baseUrl = 'https://swapi.info/api/starships/';
  private nameCache: { [id: string]: string } = {};

  constructor(private http: HttpClient) {}

  getStarshipDetails(id: string | number): Observable<Starship> {
    return this.http.get<Starship>(`${this.baseUrl}${id}`);
  }

  getStarshipName(id: string | number): Observable<string> {
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
