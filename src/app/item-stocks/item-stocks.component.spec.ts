import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemStocksComponent } from './item-stocks.component';

describe('ItemStocksComponent', () => {
  let component: ItemStocksComponent;
  let fixture: ComponentFixture<ItemStocksComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ItemStocksComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ItemStocksComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
