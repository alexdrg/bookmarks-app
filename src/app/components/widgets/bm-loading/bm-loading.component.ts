import { Component, Input } from '@angular/core';
import { ProgressSpinnerMode } from '@angular/material/progress-spinner';

@Component({
  selector: 'app-bm-loading',
  templateUrl: './bm-loading.component.html',
  styleUrls: ['./bm-loading.component.scss']
})
export class BmLoadingComponent {
  @Input() diameter: number = 20;
	@Input() mode: ProgressSpinnerMode = 'indeterminate';
	@Input() errors: any;
}

