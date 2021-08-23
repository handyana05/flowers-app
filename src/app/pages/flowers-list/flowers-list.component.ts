import { Component, OnInit, OnDestroy } from '@angular/core';
import { combineLatest, Subscription } from 'rxjs';
import { Flower } from 'src/app/models/flower';
import { FiltersService } from 'src/app/services/filters/filters.service';
import { StoreService } from 'src/app/services/store/store.service';
import { groupBy } from 'src/app/utilities/groupBy';

@Component({
  selector: 'app-flowers-list',
  templateUrl: './flowers-list.component.html',
  styleUrls: ['./flowers-list.component.scss']
})
export class FlowersListComponent implements OnInit, OnDestroy {
  categoryFlowers: any[] = [];

  private subscription$ = new Subscription();

  constructor(private storeService: StoreService, private filterService: FiltersService) { }

  ngOnInit(): void {
    this.subscription$.add(
      this.storeService.flowers$.subscribe(
        (flowers: Flower[]) => {
          this.categoryFlowers = [];
          const groupedByCategory = groupBy(flowers, f => f.category);
          for (var category in groupedByCategory) {
            this.categoryFlowers.push(groupedByCategory[category]);
          }
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
