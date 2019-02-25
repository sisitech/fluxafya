import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyafyalandingComponent } from './myafyalanding.component';

describe('MyafyalandingComponent', () => {
  let component: MyafyalandingComponent;
  let fixture: ComponentFixture<MyafyalandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyafyalandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyafyalandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
