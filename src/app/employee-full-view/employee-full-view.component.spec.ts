import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeFullViewComponent } from './employee-full-view.component';

describe('EmployeeFullViewComponent', () => {
  let component: EmployeeFullViewComponent;
  let fixture: ComponentFixture<EmployeeFullViewComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmployeeFullViewComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeFullViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
