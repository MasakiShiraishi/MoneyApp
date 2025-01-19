import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateHobbyComponent } from './calculate-hobby.component';

describe('CalculateHobbyComponent', () => {
  let component: CalculateHobbyComponent;
  let fixture: ComponentFixture<CalculateHobbyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateHobbyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateHobbyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
