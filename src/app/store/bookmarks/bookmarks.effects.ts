import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, delay, map, mergeMap, skipWhile, switchMap, take, withLatestFrom, distinctUntilChanged } from 'rxjs/operators';
import { iif, of } from 'rxjs';
import { select, Store } from '@ngrx/store';
import { BookmarksService } from '../../common/services/bookmarks.service';
import * as BookmarksActions from './bookmarks.actions';

@Injectable()
export class BookmarksEffects {

    eBookmarksApiGetList$ = createEffect(() => {
		return this.actions$.pipe(
			ofType(BookmarksActions.aBookmarksList),
            distinctUntilChanged((prev, curr) => {
                if(!curr.filters) return false;
                return JSON.stringify(prev.filters) === JSON.stringify(curr.filters)
            }),
			switchMap((action) =>
				this.bookmarksService.getBookmarksList(action?.filters)
					.pipe(
						map((result) => {
							return BookmarksActions.aBookmarksListSuccess({
								data: result,
							});
						}),
						catchError((error) =>
							of(BookmarksActions.aBookmarksListFailure({ errors: error })),
						),
					),
			),
		);
	});

    constructor(
		private store: Store,
		private actions$: Actions,
		private bookmarksService: BookmarksService,
		//private snackbarService: BmSnackbarService,
	) {
		//this.filters$.subscribe((filters) => (this.filters = filters));
	}
}