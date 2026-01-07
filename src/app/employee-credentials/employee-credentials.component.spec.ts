import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeCredentialsComponent } from './employee-credentials.component';

describe('EmployeeCredentialsComponent', () => {
  let component: EmployeeCredentialsComponent;
  let fixture: ComponentFixture<EmployeeCredentialsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeCredentialsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeCredentialsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
