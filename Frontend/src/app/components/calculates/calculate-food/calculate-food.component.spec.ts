import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateFoodComponent } from './calculate-food.component';

describe('CalculateFoodComponent', () => {
  let component: CalculateFoodComponent;
  let fixture: ComponentFixture<CalculateFoodComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateFoodComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateFoodComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
