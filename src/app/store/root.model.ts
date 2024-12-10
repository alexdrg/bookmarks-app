import { Data, Params } from '@angular/router';

export interface RouterState {
	url: any;
	params: Params;
	queryParams: Params;
	data: Data;
}
