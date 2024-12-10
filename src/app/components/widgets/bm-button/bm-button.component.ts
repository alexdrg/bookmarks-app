import { Component, Input } from '@angular/core';
import { BmBtnTypes, DefaultBtnType } from './types';
import { isPrimaryTypeBtn } from './type-guards';

@Component({
  selector: 'app-bm-button',
  templateUrl: './bm-button.component.html',
  styleUrls: ['./bm-button.component.scss']
})
export class BmButtonComponent {
  @Input() text: string | null = null;
  @Input() disabled: boolean = false;
  @Input() type: BmBtnTypes = DefaultBtnType;

  isPrimaryTypeBtn(value: string | null) {
    return isPrimaryTypeBtn(value);
  };
}
