import {Routes} from '@angular/router';
import {MoviesDashboard} from './movies-dashboard/movies-dashboard';
const routeConfig: Routes = [
  {
    path: '',
    component: MoviesDashboard,
    title: 'Movies details',
  },
  {
    path: 'movies',
    component: MoviesDashboard,
    title: 'Movies details',
  }
];
export default routeConfig;