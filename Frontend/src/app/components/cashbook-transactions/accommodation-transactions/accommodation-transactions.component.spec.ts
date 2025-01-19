import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccommodationTransactionsComponent } from './accommodation-transactions.component';

describe('AccommodationTransactionsComponent', () => {
  let component: AccommodationTransactionsComponent;
  let fixture: ComponentFixture<AccommodationTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccommodationTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccommodationTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
