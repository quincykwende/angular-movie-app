import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { MovieGenreComponent } from './movie-genre.component';
import { MovieService } from '../movie.service';

describe('MovieGenreComponent', () => {
  let component: MovieGenreComponent;
  let fixture: ComponentFixture<MovieGenreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MovieGenreComponent ],
      imports: [ RouterTestingModule ],
      providers: [ MovieService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieGenreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
