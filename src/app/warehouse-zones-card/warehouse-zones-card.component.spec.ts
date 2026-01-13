import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WarehouseZonesCardComponent } from './warehouse-zones-card.component';

describe('WarehouseZonesCardComponent', () => {
  let component: WarehouseZonesCardComponent;
  let fixture: ComponentFixture<WarehouseZonesCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WarehouseZonesCardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WarehouseZonesCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
