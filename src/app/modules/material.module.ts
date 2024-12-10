import { NgModule } from '@angular/core';

import { MatIconModule } from '@angular/material/icon';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatRippleModule, MAT_RIPPLE_GLOBAL_OPTIONS } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { ReactiveFormsModule } from '@angular/forms';



const MODULES_ARRAY = [
    MatIconModule,
    MatDialogModule,
    MatToolbarModule,
    MatRippleModule,
    MatTooltipModule,
    MatProgressSpinnerModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule
];

@NgModule({
	declarations: [],
	imports: MODULES_ARRAY,
	exports: MODULES_ARRAY,
	providers: [
		{
			provide: MatDialogRef,
			useValue: {},
		},
        {
            provide: MAT_RIPPLE_GLOBAL_OPTIONS,
            useValue: {
              color: 'rgba(255, 255, 255, 0.3)',
              terminateOnPointerUp: true,
            },
        },
		{
			provide: MAT_DIALOG_DATA,
			useValue: {},
		},
	],
})
export class MaterialModule {}