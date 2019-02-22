import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminSuperLandingComponent } from './admin-super-landing.component';

describe('AdminSuperLandingComponent', () => {
  let component: AdminSuperLandingComponent;
  let fixture: ComponentFixture<AdminSuperLandingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminSuperLandingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminSuperLandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
