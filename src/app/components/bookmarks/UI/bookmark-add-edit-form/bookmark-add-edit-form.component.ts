import { Component, Output, EventEmitter } from '@angular/core';
import { FormField } from '../../../../common/types/filters';

@Component({
  selector: 'app-bookmark-add-edit-form',
  templateUrl: './bookmark-add-edit-form.component.html',
  styleUrls: ['./bookmark-add-edit-form.component.scss']
})
export class BookmarkAddEditFormComponent {
  @Output() formSubmit = new EventEmitter<any>();

  formConfig: FormField[] = [
    {
      name: 'title',
      type: 'text',
      label: 'Title',
      placeholder: 'Enter bookmark title',
      errorMessage: 'Title is required',
      validators: { required: true, minLength: 2 },
    },
    {
      name: 'url',
      type: 'text',
      label: 'URL',
      placeholder: 'Enter bookmark url',
      errorMessage: 'URL is required',
      validators: { 
        required: true,
        pattern: '/^(https?:\/\/)?((([a-zA-Z\d]([a-zA-Z\d-]*[a-zA-Z\d])*)\.)+[a-zA-Z]{2,}|((\d{1,3}\.){3}\d{1,3}))(:\d+)?(\/[-a-zA-Z\d%_.~+]*)*(\?[;&a-zA-Z\d%_.~+=-]*)?(#[-a-zA-Z\d_]*)?$/' 
      },
    },
  ];

  _initialValues = {
      title: 'John',
      url: 'Doe',
  };

  handleFormSubmit($event: any): void {
    this.formSubmit.emit($event);
  }
}
