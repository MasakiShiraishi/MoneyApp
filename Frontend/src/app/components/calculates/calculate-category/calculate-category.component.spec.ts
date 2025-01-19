import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateCategoryComponent } from './calculate-category.component';

describe('CalculateCategoryComponent', () => {
  let component: CalculateCategoryComponent;
  let fixture: ComponentFixture<CalculateCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateCategoryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
