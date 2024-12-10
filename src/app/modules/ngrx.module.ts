import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { routerReducer, StoreRouterConnectingModule } from '@ngrx/router-store';
import { BookmarksStoreModule } from '../store/bookmarks/bookmarks-store.module';

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		StoreModule.forRoot(
			{
				router: routerReducer,
			}
		),
		StoreRouterConnectingModule.forRoot(),
        EffectsModule.forRoot(),
		StoreDevtoolsModule.instrument({
			maxAge: 25,
		}),
        BookmarksStoreModule
	],
	exports: [
		StoreModule,
		EffectsModule,
		StoreDevtoolsModule,
		StoreRouterConnectingModule,
		// APP STORES
        BookmarksStoreModule,
	],
})
export class NgrxModule {}
