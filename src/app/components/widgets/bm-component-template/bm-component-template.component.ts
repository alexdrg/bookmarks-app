import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-bm-component-template',
  templateUrl: './bm-component-template.component.html',
  styleUrls: ['./bm-component-template.component.scss']
})
export class BmComponentTemplateComponent {
    // If ngif is true then its gonna show ng-content
    @Input() ngif: any = true;
    // If ngifResults is false, then its gonna show "No result stuff"
    @Input() ngifResults: any = true;
    @Input() loading: boolean = false;
}
