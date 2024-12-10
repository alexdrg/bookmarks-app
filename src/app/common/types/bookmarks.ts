import { StoreListingData, ListingDataGrouped } from "./store-data";

// List Bookmarks
export type BookmarkData = {
    id: string,
    title: string,
    url: string,
    createDate: any
};
export type BookmarksList = BookmarkData[];
export type BookmarksListStoreData = StoreListingData<BookmarkData>;

// List categories
export const BookmarksTodayCategory = 'today';
export const BookmarksYesterdayCategory = 'yesterday';
export const BookmarksOlderCategory = 'older';

export const BookmarksListCategoriesChoices = [
    BookmarksTodayCategory,
    BookmarksYesterdayCategory,
    BookmarksOlderCategory
] as const;
export type BookmarksListCategoryType = (typeof BookmarksListCategoriesChoices)[number];
export type BookmarksListDataGrouped = ListingDataGrouped<BookmarksListCategoryType, BookmarkData>;