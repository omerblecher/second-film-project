import { Component, Input } from '@angular/core';
import { Character } from '../character';

@Component({
  standalone: true,
  selector: 'app-character-details',
  imports: [],
  template: `
    @if (character) {
      <div>
        <h3>{{ character.name }}</h3>
        <p>Height: {{ character.height }}</p>
        <p>Mass: {{ character.mass }}</p>
        <p>Hair Color: {{ character.hair_color }}</p>
        <p>Skin Color: {{ character.skin_color }}</p>
        <p>Eye Color: {{ character.eye_color }}</p>
        <p>Birth Year: {{ character.birth_year }}</p>
      </div>
    }
  `,
  styleUrl: './character-details.css'
})
export class CharacterDetails {
  @Input() character!: Character;
}
