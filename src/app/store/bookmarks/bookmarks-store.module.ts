import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { bookmarksFeatureKey, reducerBookmarks } from './bookmarks.reducer';
import { BookmarksEffects } from './bookmarks.effects';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forFeature(bookmarksFeatureKey, reducerBookmarks),
		EffectsModule.forFeature([BookmarksEffects]),
	],
})
export class BookmarksStoreModule {}
