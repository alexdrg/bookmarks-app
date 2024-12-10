import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookmarksComponent } from './bookmarks.component';
import { BookmarksListComponent } from './bookmarks-list/bookmarks-list.component';
import { BookmarksAddComponent } from './bookmarks-add/bookmarks-add.component';
import { BookmarksEditComponent } from './bookmarks-edit/bookmarks-edit.component';

const routes: Routes = [
  {
    path: 'list',
    component: BookmarksListComponent,
  },
  {
    path: 'add',
    component: BookmarksAddComponent,
  },
  {
    path: ':id/edit',
    component: BookmarksEditComponent,
  },
  {
    path: '**',
    redirectTo: 'list',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BookmarksRoutingModule { }
