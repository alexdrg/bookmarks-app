import { HttpParams } from '@angular/common/http';
import { FiltersParams } from '../types/filters';
import { isObjectEmpty } from './utils';

export function filtersToHttpParams(filters: FiltersParams | undefined): HttpParams {
	let params = new HttpParams();

    if(filters && !isObjectEmpty(filters)) {
        for (const key in filters) {
            if (params.get(key)) {
                params = params.append(key, filters?.[key]);
            }
            if (!params.get(key)) {
                params = params.set(key, filters?.[key]);
            }
          }
    };

    return params;
}