import { Pipe, PipeTransform } from '@angular/core';
import { MenuItem } from './menu.component';

@Pipe({
  name: 'menuFilter'
})
export class MenuFilterPipe implements PipeTransform {
  transform(items: MenuItem[], searchText: string): MenuItem[] {
    if (!searchText) {
      return items;
    }
    searchText = searchText.toLowerCase();
    return items.filter(item =>
      item.name.toLowerCase().includes(searchText) ||
      item.description.toLowerCase().includes(searchText)
    );
  }
}
