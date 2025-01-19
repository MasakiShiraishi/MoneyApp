import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HobbyTransactionsComponent } from './hobby-transactions.component';

describe('HobbyTransactionsComponent', () => {
  let component: HobbyTransactionsComponent;
  let fixture: ComponentFixture<HobbyTransactionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HobbyTransactionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HobbyTransactionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
