import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddhealthcenterComponent } from './addhealthcenter.component';

describe('AddhealthcenterComponent', () => {
  let component: AddhealthcenterComponent;
  let fixture: ComponentFixture<AddhealthcenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddhealthcenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddhealthcenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
