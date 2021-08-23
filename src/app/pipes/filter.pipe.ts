import { Pipe, PipeTransform } from '@angular/core';
import { Flower } from '../models/flower';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(values: Flower[], term: string): Flower[] {
    return term ? values.filter(value => value.name.toLowerCase().indexOf(term.toLowerCase()) >= 0) : values;
  }

}
