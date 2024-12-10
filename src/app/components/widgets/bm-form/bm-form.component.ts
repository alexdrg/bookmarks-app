import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FormField, ValidatorConfig } from '../../../common/types/filters';

@Component({
  selector: 'app-bm-form',
  templateUrl: './bm-form.component.html',
  styleUrls: ['./bm-form.component.scss']
})
export class BmFormComponent implements OnInit {
  @Input() config: FormField[] = [];
  @Input() initialValues: { [key: string]: any } = {};
  @Output() formSubmit = new EventEmitter<any>();

  form!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.form = this.fb.group({});
    this.createForm();
  }

  private createForm() {
    this.config.forEach((field) => {
      if (field.type === 'group') {
        const group = this.fb.group({});
        field.children?.forEach((child) => {
          group.addControl(
            child.name,
            this.fb.control(
              this.initialValues?.[field.name]?.[child.name] ?? '',
              {
                validators: () => this.mapValidators(child.validators),
                nonNullable: true,
              }
            )
          );
        });
        this.form.addControl(field.name, group);
      } else {
        this.form.addControl(
          field.name,
          this.fb.control(
            this.initialValues?.[field.name] ?? '',
            {
              validators: () => this.mapValidators(field.validators),
              nonNullable: true,
            }
          )
        );
      }
    });
  }

  private mapValidators(validators?: ValidatorConfig): Validators[] {
    const mapped = [];
    if (!validators) return [];
    if (validators.required) mapped.push(Validators.required);
    if (validators.minLength) mapped.push(Validators.minLength(validators.minLength));
    if (validators.maxLength) mapped.push(Validators.maxLength(validators.maxLength));
    if (validators.pattern) mapped.push(Validators.pattern(validators.pattern));
    return mapped;
  }

  onSubmit($event: SubmitEvent) {
    $event.preventDefault();
    if (this.form.valid) {
      this.formSubmit.emit(this.form.value);
    }
  }
}
