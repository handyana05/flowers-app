import { Component, OnInit, Input } from '@angular/core';
import { FiltersService } from 'src/app/services/filters/filters.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  @Input()
  categories!: string[];

  selectedCategory: string = '';

  constructor(private filterService: FiltersService) { }

  ngOnInit(): void {
  }

  selectCategory(selected: string) {
    if (this.selectedCategory.toLowerCase() === selected.toLowerCase()) {
      this.selectedCategory = '';
    } else {
      this.selectedCategory = selected;
    }
    this.filterService.setCategoryFilter(this.selectedCategory);
  }
}
