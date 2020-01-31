import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorPalletComponent } from './color-pallet.component';
import { comModules } from '__test__/common.imports';

describe('ColorPalletComponent', () => {
  let component: ColorPalletComponent;
  let fixture: ComponentFixture<ColorPalletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ColorPalletComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColorPalletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
