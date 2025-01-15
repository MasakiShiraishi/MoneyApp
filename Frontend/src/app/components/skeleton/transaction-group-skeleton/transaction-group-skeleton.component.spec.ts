import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionGroupSkeletonComponent } from './transaction-group-skeleton.component';

describe('TransactionGroupSkeletonComponent', () => {
  let component: TransactionGroupSkeletonComponent;
  let fixture: ComponentFixture<TransactionGroupSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransactionGroupSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionGroupSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
