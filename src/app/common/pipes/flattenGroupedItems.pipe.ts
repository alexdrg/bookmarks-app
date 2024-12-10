import { Pipe, PipeTransform } from '@angular/core';
import { BookmarkData, BookmarksListDataGrouped } from '../types/bookmarks';

@Pipe({ name: 'flattenGroupedItems' })
export class FlattenGroupedItemsPipe implements PipeTransform {
  transform<T>(groupedItems: BookmarksListDataGrouped): BookmarkData[] {
    let flattened: BookmarkData[] = [];
    
    Object.entries(groupedItems).forEach(([category, items]) => {
      // Add category
      flattened.push({ id: 'category-type', title: category, url: '', createDate: null });
      // Add category rows elements  
      flattened.push(...items);
    });

    return flattened;
  }
}
