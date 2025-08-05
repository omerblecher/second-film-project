import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesDashboard } from './movies-dashboard';

describe('MoviesDashboard', () => {
  let component: MoviesDashboard;
  let fixture: ComponentFixture<MoviesDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MoviesDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoviesDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
