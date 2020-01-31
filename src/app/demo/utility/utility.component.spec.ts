import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UtilityComponent } from './utility.component';
import { comModules } from '__test__/common.imports';

describe('UtilityComponent', () => {
  let component: UtilityComponent;
  let fixture: ComponentFixture<UtilityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [UtilityComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UtilityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
