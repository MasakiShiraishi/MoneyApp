import { Component, Input } from '@angular/core';
import { ArrowToCashbookComponent } from '../../arrows/arrow-to-cashbook/arrow-to-cashbook.component';
import { HeaderCategoryTranslatePipe } from '../../../pipes/header-category-translate.pipe';

@Component({
  selector: 'app-header-to-cashbook',
  standalone: true,
  imports: [ ArrowToCashbookComponent, HeaderCategoryTranslatePipe],
  templateUrl: './header-to-cashbook.component.html',
  styleUrl: './header-to-cashbook.component.css'
})
export class HeaderToCashbookComponent {
  @Input() category: string = '';
}
