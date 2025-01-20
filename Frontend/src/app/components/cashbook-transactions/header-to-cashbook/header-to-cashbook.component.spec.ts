import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderToCashbookComponent } from './header-to-cashbook.component';

describe('HeaderToCashbookComponent', () => {
  let component: HeaderToCashbookComponent;
  let fixture: ComponentFixture<HeaderToCashbookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderToCashbookComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderToCashbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
