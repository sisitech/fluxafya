import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExtPatientComponent } from './ext-patient.component';

describe('ExtPatientComponent', () => {
  let component: ExtPatientComponent;
  let fixture: ComponentFixture<ExtPatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExtPatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExtPatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
