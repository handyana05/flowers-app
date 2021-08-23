import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
import { Subscription } from 'rxjs';
import { FlowerDetail } from 'src/app/models/flower-detail';
import { StoreService } from 'src/app/services/store/store.service';

@Component({
  selector: 'app-flower-details',
  templateUrl: './flower-details.component.html',
  styleUrls: ['./flower-details.component.scss']
})
export class FlowerDetailsComponent implements OnInit, OnDestroy {

  detail!: FlowerDetail;
  name: string = '';

  private subscription$ = new Subscription();

  constructor(private route: ActivatedRoute, private storeService: StoreService) { }

  ngOnInit(): void {
    const strId = this.route.snapshot.paramMap.get('id');
    const id: number = strId ? +strId : 0;
    this.subscription$.add(
      this.storeService.getFlowerName(id).subscribe(
        (name: string) => {
          this.name = name;
        }
      )
    );

    this.subscription$.add(
      this.route.data.subscribe(
        (data: Data) => {
          this.detail = data.detail;
        }
      )
    );
  }

  ngOnDestroy(): void {
    this.subscription$.unsubscribe();
  }

}
