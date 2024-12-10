import { 
  Component,
  Inject,
  OnInit,
  ViewChild,
  ViewContainerRef,
  Type,
  Output, 
  EventEmitter
} from '@angular/core';
import { TOOLBAR_LIST_FILTER_COMPONENT } from '../../../common/injection-tokens/bookmarks/filter-token';
import { ToolbarService } from '../../../common/services/toolbar.service';

@Component({
  selector: 'app-main-toolbar',
  templateUrl: './main-toolbar.component.html',
  styleUrls: ['./main-toolbar.component.scss']
})
export class MainToolbarComponent implements OnInit {
  @ViewChild('customComponentContainer', { read: ViewContainerRef, static: true })
  customComponentContainer!: ViewContainerRef;

  constructor(
    @Inject(TOOLBAR_LIST_FILTER_COMPONENT) private filterComponent: Type<any>,
    private toolbarService: ToolbarService
  ) {}

  ngOnInit(): void {
    this.customComponentContainer.createComponent(this.filterComponent);
  }

  onAddButtonClick(event: MouseEvent) {
    this.toolbarService.emitAddButtonClick();
  }
}
