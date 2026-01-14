import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllItemsViewComponent } from './all-items-view.component';

describe('AllItemsViewComponent', () => {
  let component: AllItemsViewComponent;
  let fixture: ComponentFixture<AllItemsViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllItemsViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllItemsViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
