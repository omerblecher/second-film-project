import { Component, Input } from '@angular/core';
import { Starship } from '../starship';

@Component({
  selector: 'app-starship-details',
  imports: [],
  template: `
    @if (starship) {
      <div class="starship-card">
        <h3>{{ starship.name }}</h3>
        <div class="starship-meta">
          <span><strong>Model:</strong> {{ starship.model }}</span>
          <span><strong>Class:</strong> {{ starship.starship_class }}</span>
        </div>
        <div class="starship-details-list">
          <span><strong>Manufacturer:</strong> {{ starship.manufacturer }}</span>
          <span><strong>Cost:</strong> {{ starship.cost_in_credits }}</span>
          <span><strong>Length:</strong> {{ starship.length }}</span>
          <span><strong>Max Speed:</strong> {{ starship.max_atmosphering_speed }}</span>
          <span><strong>Crew:</strong> {{ starship.crew }}</span>
          <span><strong>Passengers:</strong> {{ starship.passengers }}</span>
          <span><strong>Cargo Capacity:</strong> {{ starship.cargo_capacity }}</span>
          <span><strong>Consumables:</strong> {{ starship.consumables }}</span>
          <span><strong>Hyperdrive Rating:</strong> {{ starship.hyperdrive_rating }}</span>
          <span><strong>MGLT:</strong> {{ starship.MGLT }}</span>
        </div>
      </div>
    }
  `,
  styleUrl: './starship-details.component.scss'
})
export class StarshipDetailsComponent {
  @Input() starship!: Starship;
}
