import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateAccommodationComponent } from './calculate-accommodation.component';

describe('CalculateAccommodationComponent', () => {
  let component: CalculateAccommodationComponent;
  let fixture: ComponentFixture<CalculateAccommodationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateAccommodationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateAccommodationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
