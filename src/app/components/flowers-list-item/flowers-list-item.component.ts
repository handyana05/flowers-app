import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Flower } from 'src/app/models/flower';

@Component({
  selector: 'app-flowers-list-item',
  templateUrl: './flowers-list-item.component.html',
  styleUrls: ['./flowers-list-item.component.scss']
})
export class FlowersListItemComponent implements OnInit {
  @Input()
  flower!: Flower;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  seeDetails() {
    console.log('test');
    this.router.navigate([`/details/${this.flower.id}`]);
  }

}
