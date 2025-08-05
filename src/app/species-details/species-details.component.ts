import { Component, Input } from '@angular/core';
import { Species } from '../species';

@Component({
  selector: 'app-species-details',
  imports: [],
  template: `
    @if (species) {
      <div class="species-card">
        <h3>{{ species.name }}</h3>
        <div class="species-meta">
          <span><strong>Classification:</strong> {{ species.classification }}</span>
          <span><strong>Designation:</strong> {{ species.designation }}</span>
        </div>
        <div class="species-details-list">
          <span><strong>Average Height:</strong> {{ species.average_height }}</span>
          <span><strong>Skin Colors:</strong> {{ species.skin_colors }}</span>
          <span><strong>Hair Colors:</strong> {{ species.hair_colors }}</span>
          <span><strong>Eye Colors:</strong> {{ species.eye_colors }}</span>
          <span><strong>Average Lifespan:</strong> {{ species.average_lifespan }}</span>
          <span><strong>Homeworld:</strong> {{ species.homeworld }}</span>
          <span><strong>Language:</strong> {{ species.language }}</span>
        </div>
      </div>
    }
  `,
  styleUrl: './species-details.component.scss'
})
export class SpeciesDetailsComponent {
  @Input() species!: Species;
}
