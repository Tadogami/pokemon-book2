import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'type'
})
export class TypePipe implements PipeTransform {

  japanese = {
    Grass: 'くさ',
    Poison: 'どく'
  };

  transform(types: string[], ...args: any[]): any {
    return types.map(type => this.japanese[type] || type);
  }

}
