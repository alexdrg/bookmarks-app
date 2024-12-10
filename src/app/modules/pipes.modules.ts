import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';

import { GroupByDatePipe } from '../common/pipes/groupByDate.pipe';
import { FlattenGroupedItemsPipe } from '../common/pipes/flattenGroupedItems.pipe';

const ARRAY_PIPES = [
	GroupByDatePipe,
    FlattenGroupedItemsPipe
];

@NgModule({
	declarations: ARRAY_PIPES,
	exports: ARRAY_PIPES,
	providers: [
		DatePipe,
        GroupByDatePipe,
        FlattenGroupedItemsPipe
	],
})
export class PipesModule {}
