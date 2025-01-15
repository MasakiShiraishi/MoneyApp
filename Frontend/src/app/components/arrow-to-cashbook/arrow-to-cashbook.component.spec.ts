import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowToCashbookComponent } from './arrow-to-cashbook.component';

describe('ArrowToCashbookComponent', () => {
  let component: ArrowToCashbookComponent;
  let fixture: ComponentFixture<ArrowToCashbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowToCashbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowToCashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
