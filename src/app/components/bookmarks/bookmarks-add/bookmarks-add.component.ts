import { Component } from '@angular/core';

@Component({
  selector: 'app-bookmarks-add',
  templateUrl: './bookmarks-add.component.html',
  styleUrls: ['./bookmarks-add.component.scss']
})
export class BookmarksAddComponent {
  
  constructor() {}
  
  handleFormSubmit(data: any): void {
    console.log('send post req', data);
  }
}
