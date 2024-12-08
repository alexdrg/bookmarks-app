import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
//import { MaterialModule } from '../../modules/material.module';
import { MainToolbarComponent } from './main-toolbar/main-toolbar.component';
//import { CommonTemprModule } from '../../modules/common-tempr.module';
import { RouterModule } from '@angular/router';
//import { PipesModule } from '../../modules/pipes.module';

const COMPONENTS_ARRAY = [
	MainToolbarComponent
];

@NgModule({
	declarations: COMPONENTS_ARRAY,
	imports: [
		CommonModule,
		RouterModule.forChild([]),
	],
	exports: COMPONENTS_ARRAY,
})
export class WidgetsModule {}
