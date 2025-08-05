import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Character } from './character';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {
  private baseUrl = 'https://swapi.info/api/people/';

  private nameCache: { [id: string]: string } = {};

  constructor(private http: HttpClient) {}

  getCharacterDetails(id: string | number): Observable<Character> {
    return this.http.get<Character>(`${this.baseUrl}${id}`);
  }

  getCharacterName(id: string | number): Observable<string> {
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
