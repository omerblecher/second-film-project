import { Component, Input } from '@angular/core';
import { Vehicle } from '../vehicle';

@Component({
  selector: 'app-vehicle-details',
  imports: [],
  template: `
    @if (vehicle) {
      <div class="character-card">
        <h3>{{ vehicle.name }}</h3>
        <div class="vehicle-meta">
          <span><strong>Model:</strong> {{ vehicle.model }}</span>
          <span><strong>Class:</strong> {{ vehicle.vehicle_class }}</span>
        </div>
        <div class="vehicle-details-list">
          <span><strong>Manufacturer:</strong> {{ vehicle.manufacturer }}</span>
          <span><strong>Cost:</strong> {{ vehicle.cost_in_credits }}</span>
          <span><strong>Length:</strong> {{ vehicle.length }}</span>
          <span><strong>Max Speed:</strong> {{ vehicle.max_atmosphering_speed }}</span>
          <span><strong>Crew:</strong> {{ vehicle.crew }}</span>
          <span><strong>Passengers:</strong> {{ vehicle.passengers }}</span>
          <span><strong>Cargo Capacity:</strong> {{ vehicle.cargo_capacity }}</span>
          <span><strong>Consumables:</strong> {{ vehicle.consumables }}</span>
        </div>
      </div>
    }
  `,
  styleUrl: './vehicle-details.component.scss'
})
export class VehicleDetailsComponent {
  @Input() vehicle!: Vehicle;
}
