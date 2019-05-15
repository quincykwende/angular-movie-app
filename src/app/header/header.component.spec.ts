import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {RouterTestingModule} from '@angular/router/testing'
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header.component';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../search/search.service';
import { MovieService } from '../movies/movie.service';

describe('HeaderComponent', () => {
  let component: HeaderComponent;
  let fixture: ComponentFixture<HeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HeaderComponent, SearchComponent ],
      imports: [ RouterTestingModule, FormsModule ],
      providers: [ MovieService, SearchService ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
