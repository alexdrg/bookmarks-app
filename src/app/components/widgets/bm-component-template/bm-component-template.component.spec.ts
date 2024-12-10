import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmComponentTemplateComponent } from './bm-component-template.component';

describe('BmComponentTemplateComponent', () => {
  let component: BmComponentTemplateComponent;
  let fixture: ComponentFixture<BmComponentTemplateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmComponentTemplateComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmComponentTemplateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
