import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarksListCategoryItemComponent } from './bookmarks-list-category-item.component';

describe('BookmarksListCategoryItemComponent', () => {
  let component: BookmarksListCategoryItemComponent;
  let fixture: ComponentFixture<BookmarksListCategoryItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarksListCategoryItemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarksListCategoryItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
