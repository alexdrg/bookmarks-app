import { FiltersParams } from "./filters";

export type StoreListingData<T = unknown> = {
    items: T[],
    page?: number,
    pageSize?: number,
    totalCount?: number,
    loading: boolean,
    errors?: unknown,
    filters?: FiltersParams
};

// dict with data grouped by given type model
// T: represents the available choices for groups
// I: The listing Item Type
export type ListingDataGrouped<T extends string, I> = Partial<Record<T, I[]>>;