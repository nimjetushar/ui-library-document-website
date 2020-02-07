import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DropdownDemoComponent } from './dropdown-demo.component';
import { comModules } from '__test__/common.imports';

describe('DropdownDemoComponent', () => {
  let component: DropdownDemoComponent;
  let fixture: ComponentFixture<DropdownDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DropdownDemoComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DropdownDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
