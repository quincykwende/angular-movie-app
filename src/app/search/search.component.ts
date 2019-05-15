import { Component, OnInit, ViewChild, Directive, HostBinding, ElementRef } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

import { Movie } from '../movies/movie.model';
import { SearchService } from '../search/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
@Directive({
  selector: '[appSearch]',
  exportAs:'appSearch'
})
export class SearchComponent implements OnInit {
  @ViewChild('f') searchForm: NgForm;
  results: Movie[];
  searchSubscription: Subscription;
  @HostBinding('class.show') isOpen = false;

  constructor(private searchService: SearchService, private _el: ElementRef) { }

  ngOnInit() {
    /*this.searchSubscription = this.searchForm.valueChanges
      .subscribe( result => console.log(result) );*/
  }

  //todo: .debounceTime(200) & .distinctUntilChanged()
  onKeyUp(){
    if(this.searchForm.value.searchData.query.length > 3){
      this.searchSubscription = this.searchService.moviesSearched
      .subscribe(
        this.results = this.searchService.searchMoviesByNameGenre(this.searchForm.value.searchData.query)
      );
      if(this.results.length > 0){
        this.openResultDropdown();
      }else{
        this.closeResultDropdown();
      }
    }else{
      this.closeResultDropdown();
    } 
  }

  onSelect(){
    this.searchForm.resetForm();
    this.isOpen = false;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
  }

  closeResultDropdown(){
    this.isOpen = false;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.remove('show');
  }

  openResultDropdown(){
    this.isOpen = true;
    this._el.nativeElement.querySelector('.dropdown-menu').classList.add('show');
  }

}

