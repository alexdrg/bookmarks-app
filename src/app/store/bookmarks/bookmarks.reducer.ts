import { Action, createReducer, on } from '@ngrx/store';
import * as BookmarksActions from './bookmarks.actions';
import { BookmarksListStoreData } from '../../common/types/bookmarks';

export const bookmarksFeatureKey = 'bookmarks';

export type BookmarksState = {
    listingData: BookmarksListStoreData;
    bookmarkData: any;
};

// default values
const storeListingDataInitialValue: BookmarksListStoreData = {
    items: [],
    loading: false,
};

export const initialState: BookmarksState = {
    listingData: storeListingDataInitialValue,
    bookmarkData: null,
};

const bookmarksReducer = createReducer(
    initialState,
    // List action
    on(BookmarksActions.aBookmarksList, (state, action) => {
        return {
            ...state,
            listingData: {
                ...state?.listingData,
                loading: true,
                filters: action?.filters
            }
        };
    }),
    on(BookmarksActions.aBookmarksListSuccess, (state, action) => {
        return {
            ...state,
            listingData: {
                ...state?.listingData,
                items: action?.data,
                loading: false
            }
        };
    }),
    on(BookmarksActions.aBookmarksListFailure, (state, action) => {
        return {
            ...state,
            listingData: {
                ...state?.listingData,
                loading: false,
                errors: action.errors
            }
        };
    })
    // Add action
    // Edit action
);

export function reducerBookmarks(state: BookmarksState | undefined, action: Action) {
	return bookmarksReducer(state, action);
};