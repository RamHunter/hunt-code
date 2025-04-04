import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FontSizeSwitcherComponent } from './font-size-switcher.component';

describe('FontSizeSwitcherComponent', () => {
  let component: FontSizeSwitcherComponent;
  let fixture: ComponentFixture<FontSizeSwitcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FontSizeSwitcherComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FontSizeSwitcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
