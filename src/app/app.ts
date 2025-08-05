import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MoviesDashboard } from './movies-dashboard/movies-dashboard';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  template: `
    <main>
      <section class="content">
        <router-outlet></router-outlet>
      </section>
    </main>
  `,
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Film details');
}
