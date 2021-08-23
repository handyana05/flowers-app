import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { Flower } from 'src/app/models/flower';
import { FilterPipe } from 'src/app/pipes/filter.pipe';
import { FiltersService } from 'src/app/services/filters/filters.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit, OnDestroy {

  @Input()
  flowers: Flower[] = [];

  showedFlowers: Flower[] = [];

  expanded: boolean = true;

  private subscription$ = new Subscription;

  constructor(private filterService: FiltersService, private filterPipe: FilterPipe) { }

  ngOnInit(): void {
    this.subscription$.add(
      this.filterService.text$.subscribe((text: string) => {
        this.showedFlowers = this.filterPipe.transform(this.flowers, text);
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

  getCategoryName(): string {
    if (this.flowers && this.flowers.length > 0) {
      return this.flowers[0].category;
    }
    return '';
  }

  toggleBody(): void {
    this.expanded = !this.expanded;
  }
}
