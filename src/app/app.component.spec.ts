import { TestBed, async } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { Common } from './demo/common/common.module';
import { NgLibrary, UTILITY } from '@fourjs/ng-library';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        NgLibrary,
        Common
      ],
      declarations: [
        AppComponent
      ],
    }).compileComponents();
  }));

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  });

  it('should test Utilility methods', () => {
    expect(UTILITY.sort).toBeTruthy();
    expect(UTILITY.deepCopy).toBeTruthy();
    expect(UTILITY.isDefined).toBeTruthy();
  });

  it('should test sort method of UTILITY', () => {
    const list = [
      { name: 'z - test item', price: '99.99', priority: 0, reviews: 309, rating: 2 },
      { name: 'z - test item', price: '1.99', priority: 0, reviews: 11, rating: 0.5 },
      { name: 'y - test item', price: '99.99', priority: 1, reviews: 99, rating: 1 },
      { name: 'y - test item', price: '0', priority: 1, reviews: 394, rating: 3.5 },
      { name: 'x - test item', price: '0', priority: 2, reviews: 249, rating: 0.5 }
    ];

    let sortedList = UTILITY.sort(list, ['reviews', 'price']);
    expect(sortedList[0].reviews).toEqual(11);
    expect(sortedList[0].price).toEqual('1.99');

    sortedList = UTILITY.sort(list, ['price', 'reviews']);
    expect(sortedList[0].reviews).toEqual(249);
    expect(sortedList[0].price).toEqual('0');
  });
});
