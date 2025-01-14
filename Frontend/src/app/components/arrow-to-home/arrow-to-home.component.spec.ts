import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowToHomeComponent } from './arrow-to-home.component';

describe('ArrowToHomeComponent', () => {
  let component: ArrowToHomeComponent;
  let fixture: ComponentFixture<ArrowToHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowToHomeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowToHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
