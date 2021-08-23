import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { Flower } from 'src/app/models/flower';
import { FlowerDetail } from 'src/app/models/flower-detail';
import { FlowersState, initialDataState } from 'src/app/models/store';
import { FlowersApiService } from '../flowers-api/flowers-api.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private _dataStore: FlowersState = Object.assign({}, initialDataState);

  readonly flowers$: Observable<Flower[]>;
	private _flowers$: BehaviorSubject<Flower[]>;

  readonly flowerDetails$: Observable<FlowerDetail[]>;
	private _flowerDetails$: BehaviorSubject<FlowerDetail[]>;

  constructor(
    private flowersApi: FlowersApiService
  ) {
    this._flowers$ = new BehaviorSubject([] as Flower[]);
		this.flowers$ = this._flowers$.asObservable();

    this._flowerDetails$ = new BehaviorSubject([] as FlowerDetail[]);
		this.flowerDetails$ = this._flowerDetails$.asObservable();
  }

  getFlowerDetail(id: number): Observable<FlowerDetail | undefined> {
    this.fetchFlowerDetails();
    return this._flowerDetails$.asObservable().pipe(
      filter(fds => !!fds && fds.length > 0),
      map(fds => {
        return fds.find(fd => fd.id === id);
      })
    );
  }

  getFlowerName(id: number): Observable<string> {
    return this.flowers$.pipe(
      map(fs => fs.find(f => f.id === id)),
      map(f => f ? f.name : '')
    );
  }

  fetchFlowers(): void {
    if (this._dataStore.flowers.length === 0) {
      this.flowersApi.fetchFlowers().subscribe(
        (flowers: Flower[]) => {
          this._dataStore.flowers = [ ...flowers ];
          this._flowers$.next(Object.assign({}, this._dataStore).flowers);
        },
        (error: any) => {
          console.error('Error on fetching flowers: \n', error);
        }
      );
    }
  }

  fetchFlowerDetails(): void {
    if (this._dataStore.flowerDetails.length === 0) {
      this.flowersApi.fetchFlowerDetails().subscribe(
        (fDetails: FlowerDetail[]) => {
          this._dataStore.flowerDetails = [ ...fDetails ];
          this._flowerDetails$.next(Object.assign({}, this._dataStore).flowerDetails);
        },
        (error: any) => {
          console.error(`Error on fetching details of flowers: \n`, error);
        }
      );
    }
  }
}
