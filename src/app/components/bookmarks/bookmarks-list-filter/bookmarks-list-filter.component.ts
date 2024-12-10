import { Component, EventEmitter, Output, ViewChild, ElementRef, AfterViewInit, OnDestroy } from '@angular/core';
import { fromEvent, Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter, map, tap } from 'rxjs/operators';
import { BookmarksListFilterService } from '../../../common/services/bookmarks-list-filter.service';

@Component({
  selector: 'app-bookmarks-list-filter',
  templateUrl: './bookmarks-list-filter.component.html',
  styleUrls: ['./bookmarks-list-filter.component.scss']
})
export class BookmarksListFilterComponent implements AfterViewInit, OnDestroy {
  @ViewChild('bookmarksListFilterInput', { static: true }) bookmarksListFilterInputRef!: ElementRef<HTMLInputElement>;
  
  lastEmmitedValue: string = '';
  private subscription!: Subscription;
  

  constructor(private bookmarksService: BookmarksListFilterService) {}

  ngAfterViewInit(): void {
    this.subscription = fromEvent(this.bookmarksListFilterInputRef.nativeElement, 'input')
      .pipe(
        map((event) => (event.target as HTMLInputElement).value),
        tap((value) => {
          if (this.lastEmmitedValue && !value) {
            this.saveLastEmittedValue(value);
            this.bookmarksService.setFilter(value);
          }
        }),
        filter((value) => value.length >= 2), // At least 2 chars
        distinctUntilChanged(),
        debounceTime(1500) // Let 1.5 seconds pass before sending notif
      )
      .subscribe((value) => {
        this.saveLastEmittedValue(value);
        this.bookmarksService.setFilter(value);
      });
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  saveLastEmittedValue(value?: string): void {
    this.lastEmmitedValue = value ?? '';
  }

  
}
