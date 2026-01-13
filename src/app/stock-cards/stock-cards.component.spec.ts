import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockCardsComponent } from './stock-cards.component';

describe('StockCardsComponent', () => {
  let component: StockCardsComponent;
  let fixture: ComponentFixture<StockCardsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StockCardsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
