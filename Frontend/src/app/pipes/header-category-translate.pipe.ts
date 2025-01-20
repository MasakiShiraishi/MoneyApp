import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'headerCategoryTranslate',
})
export class HeaderCategoryTranslatePipe implements PipeTransform {
  private translation: { [key: string]: string } = {
    foods: 'MAT',
    accommodation: 'BOENDE',
    clothes: 'KLÄDER',
    hobby: 'HOBBY',
    transport: 'TRANSPORT',
  };
  transform(value: string): string {
    return this.translation[value] || value;
  }
}
