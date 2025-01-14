import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashbookComponent } from './cashbook.component';

describe('CashbookComponent', () => {
  let component: CashbookComponent;
  let fixture: ComponentFixture<CashbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CashbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
