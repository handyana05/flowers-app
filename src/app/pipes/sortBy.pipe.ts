import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(values: any[], sortedBy: string): any[] {
    return values.sort((a: any, b: any) => a[sortedBy].localeCompare(b[sortedBy]));
  }

}
