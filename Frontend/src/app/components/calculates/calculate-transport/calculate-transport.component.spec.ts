import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculateTransportComponent } from './calculate-transport.component';

describe('CalculateTransportComponent', () => {
  let component: CalculateTransportComponent;
  let fixture: ComponentFixture<CalculateTransportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalculateTransportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalculateTransportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
