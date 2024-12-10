import { Component, Input } from '@angular/core';
import { BookmarkData } from 'src/app/common/types/bookmarks';

@Component({
  selector: 'app-bookmarks-list-category-item',
  templateUrl: './bookmarks-list-category-item.component.html',
  styleUrls: ['./bookmarks-list-category-item.component.scss']
})
export class BookmarksListCategoryItemComponent {
  @Input() item: BookmarkData | null = null;
}
