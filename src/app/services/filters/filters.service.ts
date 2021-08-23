import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { FilterState, initialFilterState } from 'src/app/models/filters';

@Injectable({
  providedIn: 'root'
})
export class FiltersService {

  private _dataStore: FilterState = Object.assign({}, initialFilterState);

  readonly category$: Observable<string>;
	private _category$: BehaviorSubject<string>;

  readonly text$: Observable<string>;
	private _text$: BehaviorSubject<string>;

  constructor() {
    this._category$ = new BehaviorSubject('');
		this.category$ = this._category$.asObservable();

    this._text$ = new BehaviorSubject('');
		this.text$ = this._text$.asObservable();
  }

  setCategoryFilter(category: string) {
    this._dataStore.category = category;
    this._category$.next(Object.assign({}, this._dataStore).category);
  }

  setTextFilter(text: string) {
    this._dataStore.text = text;
    this._text$.next(Object.assign({}, this._dataStore).text);
  }
}
