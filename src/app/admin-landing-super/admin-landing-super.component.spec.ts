import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLandingSuperComponent } from './admin-landing-super.component';

describe('AdminLandingSuperComponent', () => {
  let component: AdminLandingSuperComponent;
  let fixture: ComponentFixture<AdminLandingSuperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminLandingSuperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminLandingSuperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
