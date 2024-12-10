import {
  Component,
  AfterViewInit,
	ChangeDetectionStrategy,
	OnDestroy,
	TemplateRef,
	ViewChild,
	ViewEncapsulation,
  OnInit,
 } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { ActivatedRoute, Router } from '@angular/router';
import { BookmarksListFilterService } from '../../../common/services/bookmarks-list-filter.service';
import { aBookmarksList, sBookmarksListItems, sBookmarksListLoading } from '../../../store/index';
import { takeWhile, Subscription, map } from 'rxjs';
import { ToolbarService } from '../../../common/services/toolbar.service';

@Component({
  selector: 'app-bookmarks-list',
  templateUrl: './bookmarks-list.component.html',
  styleUrls: ['./bookmarks-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BookmarksListComponent implements OnInit, OnDestroy {

  // List
  listDataItems$ = this.store.pipe(select(sBookmarksListItems));
  listDataLoading$ = this.store.pipe(select(sBookmarksListLoading));
  
  alive: boolean = true;
  filterValue: string = '';

  private subscriptions: Subscription = new Subscription();

  constructor(
		protected store: Store,
		protected router: Router,
		protected aR: ActivatedRoute,
    private bookmarksFilterService: BookmarksListFilterService,
    private toolbarService: ToolbarService
	) {}

  ngOnInit(): void {
    // dispatch get data action
    this._getListData();

    // add subscription to liste for filter updates
    this.subscriptions.add(
      this.bookmarksFilterService.filter$.subscribe((filter) => {
        this.filterValue = filter;
        this._getListData();
      })
    );

    // add toolbar subscription to catch click on add btn event
    this.subscriptions.add(
      this.toolbarService.buttonClick$.subscribe(($event) => {
        this.router.navigate(['../add'], { relativeTo: this.aR });
      })
    );
  }

  ngOnDestroy(): void {
		this.alive = false;
    this.subscriptions.unsubscribe();
	}

  _getListData(): void {
    let params = {};
    if(this.filterValue) {
      params = Object.assign(params, { filters: { search: this.filterValue } });
    }
    this.store.dispatch(aBookmarksList(params));
  }

}
