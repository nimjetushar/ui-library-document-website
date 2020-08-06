import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScrollTopDemoComponent } from './scroll-top-demo.component';

describe('ScrollTopDemoComponent', () => {
  let component: ScrollTopDemoComponent;
  let fixture: ComponentFixture<ScrollTopDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScrollTopDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScrollTopDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
