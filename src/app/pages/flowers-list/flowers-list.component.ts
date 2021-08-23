import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { Flower } from 'src/app/models/flower';
import { FiltersService } from 'src/app/services/filters/filters.service';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.scss']
})
export class FlowersListComponent implements OnInit, OnDestroy {
  flowers!: Flower[];

  private subscription$ = new Subscription();

  constructor(private storeService: StoreService, private filterService: FiltersService) { }

  ngOnInit(): void {
    let filteredFlowers$ = combineLatest([
      this.storeService.flowers$,
      this.filterService.category$,
      this.filterService.text$
    ]);
    this.subscription$.add(
      filteredFlowers$.subscribe(
        ([flowers, category, text]: [Flower[], string, string]) => {
          this.flowers = flowers.filter(
            (f: Flower) => {
              let pass = category ? f.category === category : true;

              if (text) {
                pass = pass && f.name.toLowerCase().indexOf(text) >= 0;
              }

              return pass;
            }
          ).sort((a: Flower, b: Flower) => a.name.localeCompare(b.name));
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
