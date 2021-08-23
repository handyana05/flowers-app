import { Injectable } from '@angular/core';
import {
  Router, Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { take } from 'rxjs/operators';
import { FlowerDetail } from '../models/flower-detail';
import { StoreService } from '../services/store/store.service';

@Injectable({
  providedIn: 'root'
})
export class FlowerDetailsResolver implements Resolve<FlowerDetail | undefined> {
  constructor(private storeService: StoreService) { }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<FlowerDetail | undefined> {
    const id = route.paramMap.get('id');
    if (id) {
      return this.storeService.getFlowerDetail(+id).pipe(
        take(1)
      ).toPromise();
    }
    return Promise.resolve(undefined);
  }
}
