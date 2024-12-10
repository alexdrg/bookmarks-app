import { Component, Input } from '@angular/core';
import { BookmarkData } from 'src/app/common/types/bookmarks';

@Component({
  selector: 'app-bookmark-item',
  templateUrl: './bookmark-item.component.html',
  styleUrls: ['./bookmark-item.component.scss']
})
export class BookmarkItemComponent {
  @Input() item: BookmarkData | null = null;
}
