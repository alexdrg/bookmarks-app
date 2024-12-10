import { Pipe, PipeTransform } from '@angular/core';
import {
    BookmarksList,
    BookmarksListCategoriesChoices, 
    BookmarksListDataGrouped 
} from '../types/bookmarks';

@Pipe({
  name: 'groupByDate',
})
export class GroupByDatePipe implements PipeTransform {
  transform(items: BookmarksList): BookmarksListDataGrouped {
    let defaultValue: BookmarksListDataGrouped = {};
    BookmarksListCategoriesChoices.forEach((category) => {
        defaultValue[category] = [];
    });
    if (!items || items.length === 0) return defaultValue;

    return items?.reduce((acc, item) => {
        const [day, month, year] = item.createDate.split('.').map(Number);
        const createDate = new Date(year, month - 1, day);
        if (this.isToday(createDate) && acc.today) {
            acc.today.push(item);
            return acc;
        }
        if (this.isYesterday(createDate) && acc.yesterday) {
            acc.yesterday.push(item);
            return acc;
        }
        if (this.isOlder(createDate) && acc.older) {
            acc.older.push(item);
            return acc;
        }
        return acc;
    }, defaultValue);
  }

  private isToday(date: Date): boolean {
    return date.toDateString() === new Date().toDateString();
  }

  private isYesterday(date: Date): boolean {
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);
    return date.toDateString() === yesterday.toDateString();
  }

  private isOlder(date: Date): boolean {
    const today = new Date();
    const olderDate = new Date(today);
    olderDate.setDate(today.getDate() - 2);
    return date <= olderDate;
  }
}
