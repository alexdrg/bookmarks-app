import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmButtonComponent } from './bm-button.component';

describe('BmButtonComponent', () => {
  let component: BmButtonComponent;
  let fixture: ComponentFixture<BmButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
