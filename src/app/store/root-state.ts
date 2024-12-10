import { getRouterSelectors, RouterReducerState } from '@ngrx/router-store';

import { createFeatureSelector } from '@ngrx/store';
import { RouterState } from './root.model';

export interface State {
    // Add some relevant general data like auth info
	router: RouterReducerState<RouterState>;
}

export const selectRouter = createFeatureSelector<RouterReducerState<any>>('router');

export const {
	selectCurrentRoute, // select the current route
	selectQueryParams, // select the current route query params
	selectQueryParam, // factory function to select a query param
	selectRouteParams, // select the current route params
	selectRouteParam, // factory function to select a route param
	selectRouteData, // select the current route data
	selectUrl, // select the current url
} = getRouterSelectors(selectRouter);
