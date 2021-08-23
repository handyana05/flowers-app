import { Component, OnInit } from '@angular/core';
import { Flower } from './models/flower';
import { StoreService } from './services/store/store.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Flowers App';
  categories: string[] = [];

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.fetchFlowers();
    this.storeService.flowers$.subscribe(
      (flowers: Flower[]) => {
        if (flowers) {
          flowers.forEach(
            (f: Flower) => {
              if (this.categories.indexOf(f.category) < 0) {
                this.categories.push(f.category);
              }
            }
          );
          this.categories.sort((a: string, b: string) => a.localeCompare(b));
        }
      }
    )
  }
}
