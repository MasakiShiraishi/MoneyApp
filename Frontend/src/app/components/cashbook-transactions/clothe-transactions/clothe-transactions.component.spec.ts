import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClotheTransactionsComponent } from './clothe-transactions.component';

describe('ClotheTransactionsComponent', () => {
  let component: ClotheTransactionsComponent;
  let fixture: ComponentFixture<ClotheTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClotheTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClotheTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
