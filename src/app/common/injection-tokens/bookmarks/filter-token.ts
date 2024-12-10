import { InjectionToken } from '@angular/core';
import { BookmarksListFilterComponent } from 'src/app/components/bookmarks/bookmarks-list-filter/bookmarks-list-filter.component';

export const TOOLBAR_LIST_FILTER_COMPONENT = new InjectionToken<any>('TOOLBAR_LIST_FILTER_COMPONENT', {
        providedIn: 'root', factory: () => BookmarksListFilterComponent
});