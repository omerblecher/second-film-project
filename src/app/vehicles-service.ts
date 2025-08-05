import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Vehicle } from './vehicle';

@Injectable({
  providedIn: 'root'
})
export class VehiclesServiceService {
  private baseUrl = 'https://swapi.info/api/vehicles/';
  private nameCache: { [id: string]: string } = {};

  constructor(private http: HttpClient) {}

  getVehicleDetails(id: string | number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${this.baseUrl}${id}`);
  }

  getVehicleName(id: string | number): Observable<string> {
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
