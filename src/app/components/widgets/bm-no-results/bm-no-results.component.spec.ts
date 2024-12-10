import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmNoResultsComponent } from './bm-no-results.component';

describe('BmNoResultsComponent', () => {
  let component: BmNoResultsComponent;
  let fixture: ComponentFixture<BmNoResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmNoResultsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmNoResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
