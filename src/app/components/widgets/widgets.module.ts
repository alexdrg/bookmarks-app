import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
import { RouterModule } from '@angular/router';
import { MaterialModule } from 'src/app/modules/material.module';
import { BmButtonComponent } from './bm-button/bm-button.component';
import { BmLoadingComponent } from './bm-loading/bm-loading.component';
import { BmComponentTemplateComponent } from './bm-component-template/bm-component-template.component';
import { BmNoResultsComponent } from './bm-no-results/bm-no-results.component';
import { BmFormComponent } from './bm-form/bm-form.component';
import { BmCardComponent } from './bm-card/bm-card.component';

const COMPONENTS_ARRAY = [
    BmButtonComponent,
	MainToolbarComponent,
    BmLoadingComponent,
    BmComponentTemplateComponent,
    BmNoResultsComponent,
    BmFormComponent,
    BmCardComponent,
];

@NgModule({
	declarations: COMPONENTS_ARRAY,
	imports: [
		CommonModule,
		RouterModule.forChild([]),
        MaterialModule,
	],
	exports: COMPONENTS_ARRAY,
})
export class WidgetsModule {}
