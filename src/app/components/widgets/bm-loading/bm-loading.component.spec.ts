import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BmLoadingComponent } from './bm-loading.component';

describe('BmLoadingComponent', () => {
  let component: BmLoadingComponent;
  let fixture: ComponentFixture<BmLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BmLoadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BmLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
