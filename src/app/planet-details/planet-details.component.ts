import { Component, Input } from '@angular/core';
import { Planet } from '../planet';

@Component({
  selector: 'app-planet-details',
  imports: [],
  template: `
    @if (planet) {
      <div class="planet-card">
        <h3>{{ planet.name }}</h3>
        <div class="planet-meta">
          <span><strong>Climate:</strong> {{ planet.climate }}</span>
          <span><strong>Terrain:</strong> {{ planet.terrain }}</span>
        </div>
        <div class="planet-details-list">
          <span><strong>Rotation Period:</strong> {{ planet.rotation_period }}</span>
          <span><strong>Orbital Period:</strong> {{ planet.orbital_period }}</span>
          <span><strong>Diameter:</strong> {{ planet.diameter }}</span>
          <span><strong>Gravity:</strong> {{ planet.gravity }}</span>
          <span><strong>Surface Water:</strong> {{ planet.surface_water }}</span>
          <span><strong>Population:</strong> {{ planet.population }}</span>
        </div>
      </div>
    }
  `,
  styleUrl: './planet-details.component.scss'
})
export class PlanetDetailsComponent {
  @Input() planet!: Planet;
}
