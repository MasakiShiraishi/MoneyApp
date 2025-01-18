import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArrowToDetailComponent } from './arrow-to-detail.component';

describe('ArrowToDetailComponent', () => {
  let component: ArrowToDetailComponent;
  let fixture: ComponentFixture<ArrowToDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArrowToDetailComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ArrowToDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
