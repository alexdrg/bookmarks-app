import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromBookmarks from './bookmarks.reducer';
import { BookmarksListStoreData } from '../../common/types/bookmarks';

export const sBookmarksState = createFeatureSelector<fromBookmarks.BookmarksState>(
	fromBookmarks.bookmarksFeatureKey,
);

function getBookmarksListingStateData(bookmarksState: fromBookmarks.BookmarksState): BookmarksListStoreData {
    return bookmarksState?.listingData ?? {};
}

export const sBookmarksListItems = createSelector(
    sBookmarksState,
    (state) => getBookmarksListingStateData(state)?.items
);

export const sBookmarksListLoading = createSelector(
    sBookmarksState,
    (state) => getBookmarksListingStateData(state)?.loading
);

export const sOptimizationsRoasErrors = createSelector(
    sBookmarksState,
    (state) => getBookmarksListingStateData(state)?.errors
);