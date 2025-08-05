import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Species } from './species';

@Injectable({
  providedIn: 'root'
})
export class SpeciesServiceService {
  private baseUrl = 'https://swapi.info/api/species/';
  private nameCache: { [id: string]: string } = {};

  constructor(private http: HttpClient) {}

  getSpeciesDetails(id: string | number): Observable<Species> {
    return this.http.get<Species>(`${this.baseUrl}${id}`);
  }

  getSpeciesName(id: string | number): Observable<string> {
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
