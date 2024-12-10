import { createAction, props } from '@ngrx/store';
import { BookmarksList } from '../../common/types/bookmarks';
import { FiltersParams } from '../../common/types/filters';

export const aBookmarksList = createAction(
    '[Bookmarks] Get List Data',
    props<{ filters?: FiltersParams }>(),
);

export const aBookmarksListSuccess = createAction(
	'[Bookmarks] Get List Data Success',
	props<{ data: BookmarksList }>(),
);

export const aBookmarksListFailure = createAction(
	'[[Bookmarks] Get List Data Failure',
	props<{ errors: any }>(),
);