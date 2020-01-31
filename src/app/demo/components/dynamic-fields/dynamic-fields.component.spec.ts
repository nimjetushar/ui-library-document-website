import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicFieldsDemoComponent } from './dynamic-fields.component';
import { comModules } from '__test__/common.imports';

describe('DynamicFieldsDemoComponent', () => {
  let component: DynamicFieldsDemoComponent;
  let fixture: ComponentFixture<DynamicFieldsDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicFieldsDemoComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicFieldsDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
