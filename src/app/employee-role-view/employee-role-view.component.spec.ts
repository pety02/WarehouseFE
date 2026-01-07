import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeRoleViewComponent } from './employee-role-view.component';

describe('EmployeeRoleViewComponent', () => {
  let component: EmployeeRoleViewComponent;
  let fixture: ComponentFixture<EmployeeRoleViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeRoleViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeRoleViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
