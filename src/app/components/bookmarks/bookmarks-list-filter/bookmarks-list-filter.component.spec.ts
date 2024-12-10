import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksListFilterComponent } from './bookmarks-list-filter.component';

describe('BookmarksListFilterComponent', () => {
  let component: BookmarksListFilterComponent;
  let fixture: ComponentFixture<BookmarksListFilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksListFilterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksListFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
