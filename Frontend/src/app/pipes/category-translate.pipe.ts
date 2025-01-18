import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'categoryTranslate',
})
export class CategoryTranslatePipe implements PipeTransform {
  private translation: { [key: string]: string } = {
    foods: 'Mat',
  };
  transform(value: string): string {
    return this.translation[value] || value;
  }
}
