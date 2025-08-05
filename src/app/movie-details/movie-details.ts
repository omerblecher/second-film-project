import { Component, Input, inject } from '@angular/core';
import { CharactersService } from '../characters-service';
import { PlanetsService } from '../planets-service';
import { StarshipsServiceService } from '../starships-service';
import { VehiclesServiceService } from '../vehicles-service';
import { SpeciesServiceService } from '../species-service';
import { CharacterDetails } from '../character-details/character-details';
import { PlanetDetailsComponent } from '../planet-details/planet-details.component';
import { StarshipDetailsComponent } from '../starship-details/starship-details.component';
import { VehicleDetailsComponent } from '../vehicle-details/vehicle-details.component';
import { SpeciesDetailsComponent } from '../species-details/species-details.component';
import { Movie } from '../movie';
import { Character } from '../character';
import { Planet } from '../planet';
import { Starship } from '../starship';
import { Vehicle } from '../vehicle';
import { Species } from '../species';

@Component({
  selector: 'app-movie-details',
  imports: [
    CharacterDetails,
    PlanetDetailsComponent,
    StarshipDetailsComponent,
    VehicleDetailsComponent,
    SpeciesDetailsComponent
  ],
  template: `
    <div class="movie-card">
      <h2>{{ movie.title }}</h2>
      <p><strong>Release Date:</strong> {{ movie.release_date }}</p>
      <p><strong>Opening Crawl:</strong> {{ movie.opening_crawl }}</p>
      <p><strong>Director:</strong> {{ movie.director }}</p>
      <p><strong>Producer:</strong> {{ movie.producer }}</p>
      <!-- Characters Dropdown and Details -->
      <label><strong>Characters:</strong></label>
      @defer () {
        <select (change)="onCharacterSelect($event)">
          <option value="">-- select character --</option>
          @for (id of movie.characterIds; track id) {
            <option [value]="id">
              {{ characterNames[id] || 'Loading...' }}
            </option>
          }
        </select>
      } @placeholder  {
        <label>Characters will be shortly</label>
      } @loading(minimum 2s; after 500ms) {
        <label>Loading characters List</label>
      } @error {
        <label>Failed to load characters List</label>
      }
      @defer {
        @if (selectedCharacter) {
          <app-character-details [character]="selectedCharacter!"></app-character-details>
        } @else {
          <div class="character-details-placeholder">Select a character to view details</div>
        }
      } @loading(minimum 1s; after 300ms) {
        <div class="character-details-loading">Loading character details...</div>
      } @error {
        <div class="character-details-error">Failed to load character details</div>
      }

      <!-- Planets Dropdown and Details -->
      <label><strong>Planets:</strong></label>
      @defer () {
        <select (change)="onPlanetSelect($event)">
          <option value="">-- select planet --</option>
          @for (id of movie.planetIds; track id) {
            <option [value]="id">
              {{ planetNames[id] || 'Loading...' }}
            </option>
          }
        </select>
      } @placeholder  {
        <label>Planets will be shortly</label>
      } @loading(minimum 2s; after 500ms) {
        <label>Loading planets List</label>
      } @error {
        <label>Failed to load planets List</label>
      }
      @defer {
        @if (selectedPlanet) {
          <app-planet-details [planet]="selectedPlanet!"></app-planet-details>
        } @else {
          <div class="planet-details-placeholder">Select a planet to view details</div>
        }
      } @loading(minimum 1s; after 300ms) {
        <div class="planet-details-loading">Loading planet details...</div>
      } @error {
        <div class="planet-details-error">Failed to load planet details</div>
      }

      <!-- Starships Dropdown and Details -->
      <label><strong>Starships:</strong></label>
      @defer () {
        <select (change)="onStarshipSelect($event)">
          <option value="">-- select starship --</option>
          @for (id of movie.starshipIds; track id) {
            <option [value]="id">
              {{ starshipNames[id] || 'Loading...' }}
            </option>
          }
        </select>
      } @placeholder  {
        <label>Starships will be shortly</label>
      } @loading(minimum 2s; after 500ms) {
        <label>Loading starships List</label>
      } @error {
        <label>Failed to load starships List</label>
      }
      @defer {
        @if (selectedStarship) {
          <app-starship-details [starship]="selectedStarship!"></app-starship-details>
        } @else {
          <div class="starship-details-placeholder">Select a starship to view details</div>
        }
      } @loading(minimum 1s; after 300ms) {
        <div class="starship-details-loading">Loading starship details...</div>
      } @error {
        <div class="starship-details-error">Failed to load starship details</div>
      }

      <!-- Vehicles Dropdown and Details -->
      <label><strong>Vehicles:</strong></label>
      @defer () {
        <select (change)="onVehicleSelect($event)">
          <option value="">-- select vehicle --</option>
          @for (id of movie.vehicleIds; track id) {
            <option [value]="id">
              {{ vehicleNames[id] || 'Loading...' }}
            </option>
          }
        </select>
      } @placeholder  {
        <label>Vehicles will be shortly</label>
      } @loading(minimum 2s; after 500ms) {
        <label>Loading vehicles List</label>
      } @error {
        <label>Failed to load vehicles List</label>
      }
      @defer {
        @if (selectedVehicle) {
          <app-vehicle-details [vehicle]="selectedVehicle!"></app-vehicle-details>
        } @else {
          <div class="vehicle-details-placeholder">Select a vehicle to view details</div>
        }
      } @loading(minimum 1s; after 300ms) {
        <div class="vehicle-details-loading">Loading vehicle details...</div>
      } @error {
        <div class="vehicle-details-error">Failed to load vehicle details</div>
      }

      <!-- Species Dropdown and Details -->
      <label><strong>Species:</strong></label>
      @defer () {
        <select (change)="onSpeciesSelect($event)">
          <option value="">-- select species --</option>
          @for (id of movie.speciesIds; track id) {
            <option [value]="id">
              {{ speciesNames[id] || 'Loading...' }}
            </option>
          }
        </select>
      } @placeholder  {
        <label>Species will be shortly</label>
      } @loading(minimum 2s; after 500ms) {
        <label>Loading species List</label>
      } @error {
        <label>Failed to load species List</label>
      }
      @defer {
        @if (selectedSpecies) {
          <app-species-details [species]="selectedSpecies!"></app-species-details>
        } @else {
          <div class="species-details-placeholder">Select a species to view details</div>
        }
      } @loading(minimum 1s; after 300ms) {
        <div class="species-details-loading">Loading species details...</div>
      } @error {
        <div class="species-details-error">Failed to load species details</div>
      }
    </div>
  `,
  styleUrl: './movie-details.css'
})
export class MovieDetails {
  @Input() movie!: Movie;

  characterNames: { [id: number]: string } = {};
  selectedCharacter?: Character;
  planetNames: { [id: number]: string } = {};
  selectedPlanet?: Planet;
  starshipNames: { [id: number]: string } = {};
  selectedStarship?: Starship;
  vehicleNames: { [id: number]: string } = {};
  selectedVehicle?: Vehicle;
  speciesNames: { [id: number]: string } = {};
  selectedSpecies?: Species;

  private charactersService = inject(CharactersService);
  private planetsService = inject(PlanetsService);
  private starshipsService = inject(StarshipsServiceService);
  private vehiclesService = inject(VehiclesServiceService);
  private speciesService = inject(SpeciesServiceService);

  ngOnInit() {
    // Characters
    if (this.movie.characterIds && this.movie.characterIds.length > 0) {
      this.selectedCharacter = undefined;
      this.movie.characterIds.forEach((id: number) => {
        this.charactersService.getCharacterName(id).subscribe(name => {
          this.characterNames[id] = name;
        });
      });
    }
    // Planets
    if (this.movie.planetIds && this.movie.planetIds.length > 0) {
      this.selectedPlanet = undefined;
      this.movie.planetIds.forEach((id: number) => {
        this.planetsService.getPlanetName(id).subscribe(name => {
          this.planetNames[id] = name;
        });
      });
    }
    // Starships
    if (this.movie.starshipIds && this.movie.starshipIds.length > 0) {
      this.selectedStarship = undefined;
      this.movie.starshipIds.forEach((id: number) => {
        this.starshipsService.getStarshipName(id).subscribe(name => {
          this.starshipNames[id] = name;
        });
      });
    }
    // Vehicles
    if (this.movie.vehicleIds && this.movie.vehicleIds.length > 0) {
      this.selectedVehicle = undefined;
      this.movie.vehicleIds.forEach((id: number) => {
        this.vehiclesService.getVehicleName(id).subscribe(name => {
          this.vehicleNames[id] = name;
        });
      });
    }
    // Species
    if (this.movie.speciesIds && this.movie.speciesIds.length > 0) {
      this.selectedSpecies = undefined;
      this.movie.speciesIds.forEach((id: number) => {
        this.speciesService.getSpeciesName(id).subscribe(name => {
          this.speciesNames[id] = name;
        });
      });
    }
  }

  onCharacterSelect(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const id = Number(target.value);
      if (!target.value || !id) {
        this.selectedCharacter = undefined;
        return;
      }
      this.charactersService.getCharacterDetails(id).subscribe(character => {
        this.selectedCharacter = character;
      });
    }
  }

  onPlanetSelect(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const id = Number(target.value);
      if (!target.value || !id) {
        this.selectedPlanet = undefined;
        return;
      }
      this.planetsService.getPlanetDetails(id).subscribe(planet => {
        this.selectedPlanet = planet;
      });
    }
  }

  onStarshipSelect(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const id = Number(target.value);
      if (!target.value || !id) {
        this.selectedStarship = undefined;
        return;
      }
      this.starshipsService.getStarshipDetails(id).subscribe(starship => {
        this.selectedStarship = starship;
      });
    }
  }

  onVehicleSelect(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const id = Number(target.value);
      if (!target.value || !id) {
        this.selectedVehicle = undefined;
        return;
      }
      this.vehiclesService.getVehicleDetails(id).subscribe(vehicle => {
        this.selectedVehicle = vehicle;
      });
    }
  }

  onSpeciesSelect(event: Event) {
    const target = event.target as HTMLSelectElement | null;
    if (target) {
      const id = Number(target.value);
      if (!target.value || !id) {
        this.selectedSpecies = undefined;
        return;
      }
      this.speciesService.getSpeciesDetails(id).subscribe(species => {
        this.selectedSpecies = species;
      });
    }
  }
}
