import { Component, OnInit } from '@angular/core';
import { FiltersService } from 'src/app/services/filters/filters.service';

@Component({
  selector: 'app-text-filter',
  templateUrl: './text-filter.component.html',
  styleUrls: ['./text-filter.component.scss']
})
export class TextFilterComponent implements OnInit {

  textFilter: string;

  constructor(private filterService: FiltersService) {
    this.textFilter = '';
  }

  ngOnInit(): void {
  }

  textFilterChange(event: any) {
    this.textFilter = event.target.value;
    this.filterService.setTextFilter(this.textFilter);
  }

}
