import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SetupComponent } from './setup.component';
import { comModules } from './../../../../../__test__/common.imports';

describe('SetupComponent', () => {
  let component: SetupComponent;
  let fixture: ComponentFixture<SetupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SetupComponent],
      imports: [...comModules]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SetupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
