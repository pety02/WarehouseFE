import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LowStockAlertCardComponent } from './low-stock-alert-card.component';

describe('LowStockAlertCardComponent', () => {
  let component: LowStockAlertCardComponent;
  let fixture: ComponentFixture<LowStockAlertCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LowStockAlertCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LowStockAlertCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
