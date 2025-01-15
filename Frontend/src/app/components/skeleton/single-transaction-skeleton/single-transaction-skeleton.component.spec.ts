import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SingleTransactionSkeletonComponent } from './single-transaction-skeleton.component';

describe('SingleTransactionSkeletonComponent', () => {
  let component: SingleTransactionSkeletonComponent;
  let fixture: ComponentFixture<SingleTransactionSkeletonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SingleTransactionSkeletonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SingleTransactionSkeletonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
