import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodTransactionsComponent } from './food-transactions.component';

describe('FoodTransactionsComponent', () => {
  let component: FoodTransactionsComponent;
  let fixture: ComponentFixture<FoodTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FoodTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FoodTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
