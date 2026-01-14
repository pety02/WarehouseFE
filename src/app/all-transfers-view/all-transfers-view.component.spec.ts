import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllTransfersViewComponent } from './all-transfers-view.component';

describe('AllTransfersViewComponent', () => {
  let component: AllTransfersViewComponent;
  let fixture: ComponentFixture<AllTransfersViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllTransfersViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllTransfersViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
