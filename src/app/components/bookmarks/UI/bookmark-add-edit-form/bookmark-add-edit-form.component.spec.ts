import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookmarkAddEditFormComponent } from './bookmark-add-edit-form.component';

describe('BookmarkAddEditFormComponent', () => {
  let component: BookmarkAddEditFormComponent;
  let fixture: ComponentFixture<BookmarkAddEditFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookmarkAddEditFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BookmarkAddEditFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
