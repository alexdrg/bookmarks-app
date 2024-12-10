import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BookmarksRoutingModule } from './bookmarks-routing.module';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarksAddComponent } from './bookmarks-add/bookmarks-add.component';
import { BookmarksEditComponent } from './bookmarks-edit/bookmarks-edit.component';
import { BookmarkAddEditFormComponent } from './UI/bookmark-add-edit-form/bookmark-add-edit-form.component';
import { MaterialModule } from 'src/app/modules/material.module';
import { WidgetsModule } from '../widgets/widgets.module';
import { BookmarkItemComponent } from './UI/bookmark-item/bookmark-item.component';
import { BookmarksListFilterComponent } from './bookmarks-list-filter/bookmarks-list-filter.component';
import { TOOLBAR_LIST_FILTER_COMPONENT } from '../../common/injection-tokens/bookmarks/filter-token';
import { PipesModule } from 'src/app/modules/pipes.modules';
import { BookmarksListCategoryItemComponent } from './UI/bookmarks-list-category-item/bookmarks-list-category-item.component';

@NgModule({
  declarations: [
    BookmarksComponent,
    BookmarksListComponent,
    BookmarksAddComponent,
    BookmarksEditComponent,
    BookmarkAddEditFormComponent,
    BookmarkItemComponent,
    BookmarksListFilterComponent,
    BookmarksListCategoryItemComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BookmarksRoutingModule,
    WidgetsModule,
    PipesModule
  ],
  providers: [
    {
      provide: TOOLBAR_LIST_FILTER_COMPONENT,
      useValue: BookmarksListFilterComponent,
    },
  ],
})
export class BookmarksModule { }
