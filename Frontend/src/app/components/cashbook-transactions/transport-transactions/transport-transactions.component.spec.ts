import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransportTransactionsComponent } from './transport-transactions.component';

describe('TransportTransactionsComponent', () => {
  let component: TransportTransactionsComponent;
  let fixture: ComponentFixture<TransportTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransportTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransportTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
