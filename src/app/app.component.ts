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

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.storeService.fetchFlowers();
  }
}
