import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmListingWrapperComponent } from './bm-listing-wrapper.component';

describe('BmListingWrapperComponent', () => {
  let component: BmListingWrapperComponent;
  let fixture: ComponentFixture<BmListingWrapperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmListingWrapperComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmListingWrapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
