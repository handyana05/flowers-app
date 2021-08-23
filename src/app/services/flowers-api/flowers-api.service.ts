import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Flower } from 'src/app/models/flower';
import { FlowerDetail } from 'src/app/models/flower-detail';
import { map } from 'rxjs/operators';

const HTTP_JSON_OPTIONS = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class FlowersApiService {

  constructor(private http: HttpClient) { }

  fetchFlowers(): Observable<Flower[]> {
    return this.http.get<Flower[]>('./assets/data/flowers.json', HTTP_JSON_OPTIONS);
  }

  fetchFlowerDetails(): Observable<FlowerDetail[]> {
    return this.http.get<FlowerDetail[]>('./assets/data/flower-infos.json', HTTP_JSON_OPTIONS);
  }
}
