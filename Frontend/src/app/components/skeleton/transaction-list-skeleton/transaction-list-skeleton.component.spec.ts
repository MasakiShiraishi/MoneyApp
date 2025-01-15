import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionListSkeletonComponent } from './transaction-list-skeleton.component';

describe('TransactionListSkeletonComponent', () => {
  let component: TransactionListSkeletonComponent;
  let fixture: ComponentFixture<TransactionListSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionListSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionListSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
