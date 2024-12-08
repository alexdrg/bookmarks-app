import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { 
    path: 'bookmarks',
    loadChildren: () => import('./components/bookmarks/bookmarks.module').then(m => m.BookmarksModule) 
  },
  { path: '**', redirectTo: 'bookmarks' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
