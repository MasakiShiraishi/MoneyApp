import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateClotheComponent } from './calculate-clothe.component';

describe('CalculateClotheComponent', () => {
  let component: CalculateClotheComponent;
  let fixture: ComponentFixture<CalculateClotheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateClotheComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateClotheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
