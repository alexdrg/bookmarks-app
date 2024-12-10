import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FiltersParams } from '../types/filters';
import { filtersToHttpParams } from '../utils/filters';
import { BookmarksList } from '../types/bookmarks';

@Injectable({
	providedIn: 'root',
})
export class BookmarksService {
	url = `${environment.url}/bookmarks/`;

	constructor(private http: HttpClient) {}

    getBookmarksList(filters: FiltersParams | undefined): Observable<BookmarksList> {
		const data = filtersToHttpParams(filters);
		return this.http.get<BookmarksList>(this.url, { params: data });
	}
}